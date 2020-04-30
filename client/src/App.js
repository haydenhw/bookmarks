import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import MainView from "./views/MainView";
import AddBookmarkView from "./views/AddBookmarkView";
import {useStateValue} from "./index";
import api from "./api";

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
            <MainView/>
          </Route>
          <Route exact path="/add-bookmark">
            <AddBookmarkView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
