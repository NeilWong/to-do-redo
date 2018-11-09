import React from 'react';
import './TodoInput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    {/*Requires the file that creates a class instance to pass/define in a parameter named "todoText"*/}
    this.state = {
      value: this.props.todoText
    };
  }

  // Deals with text updates to the local input element
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  //Calls its constructor's passed in function, props.addTodo in order to add a local todo
  addTodo = (todo) => {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        {/*Create a text input that's text is equal to the local state's value parameter*/}
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        {/*Create button that calls its "waterfalled"/passed down addTodo function, providing any newly entered text as the argument*/}
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    );
  }
}
