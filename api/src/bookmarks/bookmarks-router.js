const path = require('path');
const express = require('express');
const BookmarksService = require('./bookmarks-service');
const {logger} = require('../util');

const bookmarksRouter = express.Router();
const jsonParser = express.json();

bookmarksRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    BookmarksService.getAllBookmarks(knexInstance)
      .then(bookmarks => {
        res.json(bookmarks)
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const {title, url, rating, description} = req.body;
    const newBookmark = {title, url, rating, description};

    for (const [key, value] of Object.entries(newBookmark))
      if (value == null) {
        const message = `Missing '${key}' in request body`;
        logger.error(message);
        return res.status(400).json({
          error: {message}
        });
      }

    BookmarksService.insertBookmark(
      req.app.get('db'),
      newBookmark
    )
      .then(bookmark => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${bookmark.id}`))
          .json(bookmark)
      })
      .catch(next)
  });

bookmarksRouter
  .route('/:bookmark_id')
  .all((req, res, next) => {
    BookmarksService.getById(
      req.app.get('db'),
      req.params.bookmark_id
    )
      .then(bookmark => {
        if (!bookmark) {
          const message = `Bookmark doesn't exist`;
          logger.error(message);
          return res.status(404).json({
            error: {message}
          })
        }
        res.bookmark = bookmark;
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(res.bookmark)
  })
  .delete((req, res, next) => {
    BookmarksService.deleteBookmark(
      req.app.get('db'),
      req.params.bookmark_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const {title, url, rating, description} = req.body;
    const bookmarkToUpdate = {title, url, rating, description};

    const numberOfValues = Object.values(bookmarkToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      const message = `Request body must contain 'title, url, rating, description`;
      return res.status(400).json({ error: { message }});
    }

    BookmarksService.updateBookmark(
      req.app.get('db'),
      req.params.bookmark_id,
      bookmarkToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  });

module.exports = bookmarksRouter;
