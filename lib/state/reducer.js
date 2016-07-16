import * as actions from "./actions";

export default function reducer(state, action) {
  
  switch(action.type) {
    case actions.SET_CODE:
      return state.setIn(["editor", "code"], action.code);
    
    case actions.SET_VALIDATOR_RESULT:
      return state.setIn(["validator", "result"], action.result);
  }
  
  return state;
}
