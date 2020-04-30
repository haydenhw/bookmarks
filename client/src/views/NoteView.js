import React from 'react';
import {Link, useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Container from "../components/Container";
import bookmarkData from "../bookmarkData";
import Bookmark from "../components/Bookmark";

function BookmarkView() {
  const { id: selectedBookmarkId  } = useParams();
  const bookmark = bookmarkData.bookmarks.find(n => n.id === selectedBookmarkId)
  const folderName = bookmarkData.folders.find(f => f.id === bookmark.folderId).name;
  return (
    <Container>
      <Sidebar>
        <div style={{padding: '15px'}}>
          <Link to="/" className="waves-effect waves-light btn" >Go Back</Link>
          <h4>{folderName}</h4>
        </div>
      </Sidebar>
      <Main>
        <Bookmark {...bookmark}/>
        <p>{bookmark.content}</p>
      </Main>
    </Container>
  );
}

export default BookmarkView;
