import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import MainView from "./views/MainView";
import FolderView from "./views/FolderView";
import NoteView from "./views/NoteView";
import AddBookmarkView from "./views/AddBookmarkView";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/">
            <MainView/>
          </Route>
          <Route exact path="/add-bookmark">
            <AddBookmarkView/>
          </Route>
          <Route path="/folder/:id">
            <FolderView/>
          </Route>
          <Route path="/note/:id">
            <NoteView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
