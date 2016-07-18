import React, {PropTypes} from "react";
import Codemirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";

export default class CodeEditor extends React.Component {
  
  static propTypes = {
    code: PropTypes.string,
    onCodeChange: PropTypes.func
  };
  
  render() {
    const {code, onCodeChange} = this.props;
    var options = { lineNumbers: true, mode: "javascript", theme: "tomorrow-night-bright"};
    return (
      <div className="code-editor">
        <Codemirror value={code} onChange={onCodeChange} options={options}/>
      </div>
    );
  }
  
}