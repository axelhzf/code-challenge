import React from "react";
import {connect} from "react-redux";
import CodeEditor from "../components/CodeEditor";
import ValidatorResult from "../components/ValidatorResult";
import * as actions from "../state/actions";

class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(actions.setCode(this.props.code));
  }
  
  onCodeChange = (code) => {
    this.props.dispatch(actions.setCode(code))
  };
  
  render() {
    const {code, validatorResult} = this.props;
    return (
      <div className="app">
        <ValidatorResult data={validatorResult}></ValidatorResult>
        <CodeEditor code={code} onCodeChange={this.onCodeChange}></CodeEditor>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    code: state.editor.code,
    validatorResult: state.validator.result
  };
};

export default connect(mapStateToProps)(App);
