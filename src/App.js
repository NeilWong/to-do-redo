import React, { Component } from 'react';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "pls"},
        {id: 1, text: "help"},
        {id: 2, text: "sos"}
      ],
      nextId: 3
    };
  }

  /*
  * Adds a new todo item to state.todos that has two parameters
  * id - (so that the newly created object can later delete itself by passing in its id)
  * todoText - (used to )
  */
  addTodo = (todoText) => {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  /*
  * Goes through the state todos list and recreates it but only copying over todos that don't have
  * the passed in id (the todo we want to do will have that id and as a result wont be copied over)
  */
  removeTodo = (id) => {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <TodoHeader />
          <TodoInput todoText="" addTodo={this.addTodo} />
          {/*Equivalent to creating a const name element to return the mapped and instantiated objects within todos*/}
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
