import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose; //add support for redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
