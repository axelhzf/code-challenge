export const SET_CODE = "SET_CODE";
export const SET_VALIDATOR_RESULT = "SET_VALIDATOR_RESULT";
const CodeValidatorWorker = require("worker!../workers/CodeValidatorWorker.js");


export const setCode = code => dispatch => {
  dispatch({type: SET_CODE, code});
  
  const codeValidatorWorker = new CodeValidatorWorker();
  codeValidatorWorker.addEventListener('message', (e) => {
    codeValidatorWorker.terminate();
    dispatch({type: SET_VALIDATOR_RESULT, result: e.data});
  });
  codeValidatorWorker.postMessage(code);
};


