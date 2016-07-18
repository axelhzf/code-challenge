import React, {PropTypes} from "react";


export default class ValidatorResult extends React.Component {
  
  static propTypes = {
    data: PropTypes.object
  };
  
  renderAssert = (assert) => {
    return <li key={assert.number}>{assert.comment} {assert.name} {assert.ok ? "OK": "ERROR"} {JSON.stringify(assert.extra)}</li>;
  };
  
  render() {
    const {data} = this.props;
    let content;
    if (!data) return <div className="validator-result">Test no executed</div>;
    
    const {error, stats, asserts} = data;
    
    if (error) {
      return <div className="validator-result">{error}</div>
    }
    
    return (
      <div className="validator-result">
        <ul className="summary">
          <li>Asserts: {stats.asserts}</li>
          <li>Passes: {stats.passes}</li>
          <li>Failures: {stats.failures}</li>
        </ul>
        <ul>
          {asserts.map(this.renderAssert)}
        </ul>
      </div>
    );
  }
  
}


