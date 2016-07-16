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
    if (!data) return <div>Test no executed</div>;
    
    const {error, stats, asserts} = data;
    
    if (error) {
      return <div>{error}</div>
    }
    
    return (
      <div>
        <h3>Stats:</h3>
        <ul>
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


