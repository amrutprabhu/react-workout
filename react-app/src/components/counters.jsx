import React from "react";
import Counter2 from "./counter2";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-danger btn-sm2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter2
            key={counter.id}
            deleteHandler={this.props.onDelete}
            incrementHandler={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
