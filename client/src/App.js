import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useStateValue} from "./index";
import api from "./api";
import Nav from './components/Nav';
import BookmarkListView from "./views/BookmarkListView";
import AddBookmarkView from "./views/AddBookmarkView";
import EditBookmarkView from "./views/EditBookmarkView";

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    (async () => {
      const bookmarks = await api.fetchBookmarks();
      dispatch({
        type: 'loadBookmarks',
        bookmarks,
      })
    })()
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/">
            <BookmarkListView/>
          </Route>
          <Route exact path="/add-bookmark">
            <AddBookmarkView/>
          </Route>
          <Route exact path="/edit-bookmark/:id">
            <EditBookmarkView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
