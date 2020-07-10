import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import ToDoList from "./ToDoList";

class App extends Component {

  state={
    toDoList : [],
    completedToDoList : [],
    activeToDoList : [],
    editListItem : {}
  } 
  

  addInputListData(data){
    data.createdOn = new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()
    let list= this.state.toDoList.slice()
    if(list.indexOf(this.state.editListItem)===-1){
      list.push(data)
      this.setState({
        toDoList : list
      })
      return
    }
    list.splice(list.indexOf(this.state.editListItem),1,data)
    this.setState({
      toDoList : list,
      editListItem : {}      
    })
  }

  removeListItem(data){
    this.setState({
      toDoList : this.state.toDoList.filter((element,index)=> index !== data)
    })
  }

  isCompleted(data){
    let list= this.state.toDoList.slice()
    let completeOrNot = list[data].isCompleted
   
    completeOrNot ? list[data].isCompleted=false : list[data].isCompleted=true;
    this.setState({
      toDoList : list
    })
  }

  editListItem(data){
    let listItem = this.state.toDoList[data]
    this.setState({
      editListItem : listItem
    })

  }


  render() {
    
    return (
      <div>
        <div className="mt-3 row">
            <div className="col-md-6 offset-3">
              <Input addInputListData={(data)=> this.addInputListData(data)}   editListItem={this.state.editListItem}/>
            </div>
        </div>
        <div className="mt-3 mb-5 row">
            <div className="px-0 col-md-8 shadow rounded offset-2">
              <ToDoList toDoList={this.state.toDoList} removeListItem={(data)=> this.removeListItem(data)} isCompleted={(data)=> this.isCompleted(data)} editListItem={(data)=> this.editListItem(data)}  />
            </div>
        </div>
      </div>
        
    );
  }
}

export default App;
