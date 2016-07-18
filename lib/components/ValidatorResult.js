import React, {PropTypes} from "react";
import classNames from "classNames";
import _ from "lodash";

export default class ValidatorResult extends React.Component {
  
  static propTypes = {
    data: PropTypes.object
  };
  
  renderAssert = (assert) => {
    const style = classNames({pass: assert.ok, fail: !assert.ok});
    let extra = null;
    if (assert.extra) {
      extra = (<ul>
        {_.map(assert.extra, (value, key) => <li>{key}: {value}</li>)}
      </ul>);
    }
    
    
    return <li key={assert.number} className={style}>{assert.comment} {assert.name} {extra}</li>;
  };
  
  render() {
    const {data} = this.props;
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


