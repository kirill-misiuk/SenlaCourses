import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../reducers/items';

class AddTodoForm extends Component {
  state={
    todo: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});


  handleSubmit = e => {
    e.preventDefault();
    const {todo} = this.state;
    const {addTodo} = this.props;
    const result = {
      text: todo,
      id: Math.floor((Math.random() * 100) + 1),
      complete: false
    };

    addTodo(result);
    this.setState({todo: ''})
  }


  render() {
    const {todo} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" value={todo} onChange={this.handleChange} type="text"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  addTodo: value => dispatch(addTodo(value))
});

export default connect(null, {addTodo})(AddTodoForm);

// export default connect(null, (dispatch) => ({
//   addTodo: value => dispatch(addTodo(value))
// }))(AddTodoForm);
