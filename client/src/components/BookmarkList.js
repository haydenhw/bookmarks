import React from 'react';
import Bookmark from "./Bookmark";
import {Link} from "react-router-dom";
import {useStateValue} from "../index";

const style = {
  bookmarkListWrap: {
    maxHeight: '70vh',
    overflow: 'scroll',
  }
}

function BookmarkList() {
  const [{bookmarks}, dispatch] = useStateValue();
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
