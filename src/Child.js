import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.inputText], inputText: ''});
  };



  render() {
    return (
      <div style={{padding:20}}>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange} placeholder="Add a todo" />
        <button onClick={this.addTodo}>Add Todo</button>

      </div>
    );
  }
}

export default TodoList;