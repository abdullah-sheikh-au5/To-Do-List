import React, { Component } from 'react';

class Input extends Component {
  state = {
    title: '',
    deadline: '',
    isCompleted: false,
    createdOn: ''
  };

  inputData(data) {
    this.setState({
      title: data
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.editListItem.title,
        deadline: this.props.editListItem.deadline
      });
    }
  }

  render() {
    return (
      <div className='form-group shadow px-5 pb-3 bg-light'>
        <h3 className='text-center'>TO DO</h3>
        <hr />
        <input
          type='text'
          className='form-control mt-2'
          placeholder='Add New To-Do'
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <input
          type='date'
          className='form-control mt-2'
          placeholder='DD-MM-YYYY'
          value={this.state.deadline}
          onChange={event => this.setState({ deadline: event.target.value })}
        />
        <button
          className='btn btn-success btn-lg btn-block mt-3'
          onClick={() => {
            this.props.addInputListData(this.state);
            this.setState({ title: '', deadline: '' });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Input;
