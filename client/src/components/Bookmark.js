import React from 'react';
import {Link} from "react-router-dom";

// this beomces bookmarks
function Bookmark(props) {
  return (
    <div className="card">
      <div className="card-content">
        <Link style={{color: 'black'}} to={`/bookmark/${props.id}`} className="card-title">{props.title}</Link>
        <p>
          <a href={props.url}>{props.url}</a>
        </p>
        <p>{props.description}</p>
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
}

export default Bookmark;
