import React, {createContext, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const StateContext = createContext();
const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

const initialState = {
  bookmarks: [],
  notes: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadBookmarks':
      return {
        ...state,
        bookmarks: action.bookmarks,
      };
    case 'addBookmark':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.newBookmark]
      };
    case 'updateBookmark':
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark =>
          bookmark.id === action.id ?
            Object.assign({}, bookmark, {...action.toUpdate}) :
            bookmark
        )
      };
    case 'deleteBookmark':
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.id)
      };
    default:
      return state;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Bookmark this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
