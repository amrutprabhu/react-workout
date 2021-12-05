import React, { Component } from "react";

class Counter2 extends React.Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={()  => this.props.incrementHandler(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.deleteHandler( this.props.counter.id )}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let className = "badge badge-";
    if (this.props.counter.value === 0) {
      className += "warning m-2";
      return className;
    }
    className += "primary m-2";
    return className;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value
    ;
  }
}

export default Counter2;
