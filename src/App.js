import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './task-item';
//Going to have a Delete and Rename Functionalities
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo_list : [{title: "ex. Item1 = Not Die", item_input: ''}, //item input will be used to delete or rename
                   {title: "ex2. Item2 = Breath", item_input: ''}],
      input: ''
    }
  }
handle_change = (event) =>{
  this.setState(
    {input:event.target.value})
}

handle_submit = (event) =>{
  const new_item = {
    title: this.state.input,
    rename_input: ''
  }
  event.preventDefault()
  this.setState({
    todo_list : [...this.todo_list, new_item],
    input:''
  })

}

input_handle_change = (event,item) =>{
    const {todo_list} = this.state

    for (let i = 0; i< todo_list.length ; i++){
      if (todo_list[i] === item){
        todo_list[i].item_input = event.target.value
      }
    }
    this.setState({
      todo_list
    })

}
input_handle_submit = (event,item) =>{
  const {todo_list} = this.state

  for (let i = 0; i< todo_list.length ; i++){
    if (todo_list[i] === item){
      todo_list[i].title = todo_list[i].item_input
      todo_list[i].item_input = ''
    }
  }
  this.setState({
    todo_list
  })
}


remove_handle_submit = (event,item) =>{
  event.preventDefault()
  const {todo_list} = this.state

  for (let i = 0; i< todo_list.length ; i++){
    if (todo_list[i] === item){
      todo_list.splice(i,1)
    }
  }
  this.setState({
    todo_list
  })
}


  render() {
    return (
        <div class="display">
          <h1> My TO-DO List </h1>
        </div>
    );
  }
}

export default App;
