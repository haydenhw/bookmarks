import React from 'react';
import BookmarkList from "../components/BookmarkList";
import bookmarkData from "../bookmarkData";

function MainView() {
  return (
    <BookmarkList bookmarks={bookmarkData.bookmarks}/>
  );
}

export default MainView;