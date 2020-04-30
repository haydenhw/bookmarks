import React from 'react';
import {useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import BookmarkList from "../components/BookmarkList";
import bookmarkData from "../bookmarkData";

function FolderView() {
  const { id: selectedFolderId  } = useParams();
  const bookmarks = bookmarkData.bookmarks.filter(n => n.folderId === selectedFolderId);
  return (
    <Container>
      <Sidebar>
        <FolderList folders={bookmarkData.folders} selectedFolderId={selectedFolderId}/>
      </Sidebar>
      <Main>
        <BookmarkList bookmarks={bookmarks}/>
      </Main>
    </Container>
  );
}

export default FolderView;
