import React from 'react';
import Bookmark from "./Bookmark";
import {Link} from "react-router-dom";
// convert to bookmark list
const style = {
  bookmarkListWrap: {
    maxHeight: '70vh',
    overflow: 'scroll',
  }
}

const bookmarks = [
  {
    id: 1,
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Think outside the classroom',
    rating: 5,
  },
  {
    id: 2,
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4,
  },
  {
    id: 3,
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 5,
  },
];

// use mock data for bookmarks
function BookmarkList() {
  const bookmarkList = bookmarks.map(n => <Bookmark key={n.id} {...n} />)
  return (
    <div className="container">
      <div style={style.bookmarkListWrap}>
        {bookmarkList}
      </div>
      <Link to="/add-bookmark" className="waves-effect waves-light btn" >Add Bookmark</Link>
    </div>
  );
}

export default BookmarkList;
