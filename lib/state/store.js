import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"
import Immutable from "seamless-immutable";

const initialState = Immutable({
  editor: {
    code: `self.helloWorld = function() { return "Hello World";}`
  },
  validator: {
    result: undefined
  }
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
