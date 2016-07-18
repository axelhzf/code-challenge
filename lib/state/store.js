import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"
import Immutable from "seamless-immutable";

const initialState = Immutable({
  editor: {
    code: `self.add = function() { return 0 }`
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
