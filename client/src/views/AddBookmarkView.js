import React from 'react';
import {useHistory} from "react-router-dom";

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
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    const {title, url, description, rating} = event.target;
    const newBookmark = {
      title: title.value,
      url: url.value,
      description: description.value,
      rating: rating.value,
    };
    // Actions.CreateBookmark(newBookmark)
    // route to bookmarks list
    history.push('/');
  }

  return (
    <div className="container">
      <div style={style.addBookmarkForm} className="card">
        <div className="card-content">
          <span className="card-title">Add Bookmark</span>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input name="title" type="text" />
            </label>
            <label>
              Url:
              <input name="url" type="text" />
            </label>
            <label>
              Description:
              <input name="description" type="text" />
            </label>
            <label> Rating
              <select name="rating" style={style.select}>
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
