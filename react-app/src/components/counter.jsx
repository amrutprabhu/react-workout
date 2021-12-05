import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
  };

  buttonClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.info("yes");
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.buttonClick}
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
    if (this.state.count === 0) {
      className += "secondary m-2";
      return className;
    }
    className += "primary m-2";
    return className;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
