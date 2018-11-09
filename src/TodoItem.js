import React from 'react';
import './TodoItem.css';

/*
  Class that represents each Todo item
*/
export default class TodoItem extends React.Component {
  constructor(props) {
    {/* Is passed in two parameters, a todo text & a prop id*/}
    super(props);
  }

  // Function for the remove button that calls its object's passed in removeTodo function, supplying the
  removeTodo(id) {
    console.log(id)
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>{this.props.todo.text}
      </div>
    );
  }
}
