import NavBar from "./components/navbar";
import React from "react";
import Counters from "./components/counters";
import { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 200 },
      { id: 3, value: 0 },
    ],
  };

  handleReset = () => {
    this.state.counters.forEach((c) => (c.value = 0));
    this.setState({ counters: this.state.counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    this.state.counters[index].value++;
    this.setState({ counters: this.state.counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters.filter(c => c.value >0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
