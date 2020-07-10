import React, { Component } from 'react'

class ToDoList extends Component {

  state={
    dropdown : "ALL"
  }




  render() {
    return (
      <div className='p-5 bg-light'>
        <div className='row'>
          <h3 className='col'>TO DO LIST</h3>
          <div className='btn-group dropright'>
            <button
              type='button'
              className='btn btn-secondary dropdown-toggle'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
          {this.state.dropdown}
            </button>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='#!' onClick={()=> this.setState({ dropdown:"ALL"})}>
                ALL
              </a>
              <a className='dropdown-item' href='#!' onClick={()=> this.setState({ dropdown:"COMPLETED"})} >
                COMPLETED
              </a>
              <a className='dropdown-item' href='#!' onClick={()=> this.setState({ dropdown:"ACTIVE"})} >
                ACTIVE
              </a>
            </div>
          </div>
          <hr />
        </div>
        <ul className='w3-content w3-section list-group mt-1'>
          {this.props.toDoList.filter((item)=>{
            if(this.state.dropdown=== "ACTIVE"){
              return !item.isCompleted
            }
            if(this.state.dropdown=== "COMPLETED"){
              return item.isCompleted
            }
            return item
          })
          .map((element, index) => {
            return (
              <li
                key={index}
                className={
                  'w3-animate-zoom pb-0 mb-3 shadow rounded list-group-item  ' +
                  (element.isCompleted
                    ? 'list-group-item-success'
                    : 'list-group-item-danger')
                }
              >
                {element.isCompleted ? (
                  <del>{element.title}</del>
                ) : (
                  element.title
                )}
                &nbsp;&nbsp;&nbsp;&nbsp; {element.deadline}
                <a href='#!'>
                  <i
                    className='fa fa-pencil-square-o text-dark ml-3'
                    aria-hidden='true'
                    onClick={() => this.props.editListItem(index)}
                  ></i>
                </a>
                <a href='#!'>
                  <i
                    className='fa fa-window-close pull-right text-dark ml-3'
                    aria-hidden='true'
                    onClick={() => this.props.removeListItem(index)}
                  ></i>
                </a>
                <a href='#!'>
                  <i
                    className='fa fa-check pull-right text-dark'
                    aria-hidden='true'
                    onClick={() => this.props.isCompleted(index)}
                  ></i>
                </a>
                <div className='row'>
                  <div className='col-sm-12'>
                    <small className='pull-right'>
                      <em>Created On: {element.createdOn}</em>
                    </small>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
