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
  console.log(bookmarks)
  if (bookmarks.length === 0) return null;

  const bookmarkList = bookmarks.map(b => <Bookmark key={b.id} {...b} />)
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
