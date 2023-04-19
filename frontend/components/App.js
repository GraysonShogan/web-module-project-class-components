import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showCompleted: false,
    };
  }
  render() {
    return <div>Todo App</div>;
  }
}
