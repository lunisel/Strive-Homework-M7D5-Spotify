import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import likedReducer from "../reducers/likedSongs";
import songReducer from "../reducers/song";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  likedSongs: {
    elements: [],
  },
  currentSong: {
    data: {},
  },
};

const bigReducer = combineReducers({
  song: songReducer,
  likedSongs: likedReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore
