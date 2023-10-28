import React, { Component } from "react";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  addTodo = () => {
    if (this.state.newTodo.trim() !== "") {
      const newTodo = {
        text: this.state.newTodo,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodo: "",
      });
    }
  };

  toggleTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  removeTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleTodo(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
