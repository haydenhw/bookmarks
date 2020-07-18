import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useStateValue} from "../index";
import api from "../api";

const style = {
  addBookmarkForm: {
    margin: '30px auto',
    width: '600px',
  },
  select: {
    display: 'block',
  }
}

export default function AddBookmarkView() {
  const [{bookmarks}, dispatch] = useStateValue();
  const history = useHistory();
  let {id} = useParams();
  id = parseInt(id);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {title, url, description, rating} = event.target;
    const updatedBookmark = {
      id,
      title: title.value,
      url: url.value,
      description: description.value,
      rating: rating.value,
    };

    await api.updateBookmark(id, updatedBookmark);

    dispatch({
      type: 'updateBookmark',
      updatedBookmark,
    })

    history.push('/');
  }

  const selectedBookmark = bookmarks.find(b => b.id === id);
  if (!selectedBookmark) return null;
  return (
    <div className="container">
      <div style={style.addBookmarkForm} className="card">
        <div className="card-content">
          <span className="card-title">Add Bookmark</span>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input defaultValue={selectedBookmark.title} name="title" type="text" />
            </label>
            <label>
              Url:
              <input defaultValue={selectedBookmark.url} name="url" type="text" />
            </label>
            <label>
              Description:
              <input defaultValue={selectedBookmark.description} name="description" type="text" />
            </label>
            <label> Rating
              <select defaultValue={selectedBookmark.rating} name="rating" style={style.select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <input className="btn" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}
