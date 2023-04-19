import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>TODOS</h1>

        <ul>
          {todos.map((todo) => {
            return (
              <li key={todos.id}>
                {todo.task}{" "}
                {todo.completed ? <span>- completed</span> : <span></span>}
              </li>
            );
          })}
        </ul>

        <form>
          <input type="text" />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}
