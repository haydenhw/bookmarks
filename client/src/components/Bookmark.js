import React from 'react';
import {Link} from "react-router-dom";

function Bookmark(props) {
  return (
    <div className="card">
      <div className="card-content">
        <Link style={{color: 'black', float: 'right', cursor: 'pointer', fontSize: '.9em'}} to={`/edit-bookmark/${props.id}`} className="card-title">Edit</Link>
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
