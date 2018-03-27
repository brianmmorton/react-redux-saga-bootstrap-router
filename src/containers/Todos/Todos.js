import React, { Component } from 'react';
import { Spinner } from 'components';

export default class Todos extends Component {

  componentWillMount () {
    this.props.fetchTodos();
  }

  render () {
    const { todos, } = this.props;

    return (
      <div style={{ width: '100%', textAlign: 'center', paddingTop: 20 }}>
        {todos.loading && <Spinner text='Loading todos...' />}
        {todos.data.map(todo =>
          <Todo key={todo.id} data={todo} />
        )}
      </div>
    )
  }
}

const Todo = ({ data }) => (
  <div data-id={data.id} style={{ margin: '0 auto' }}>
    <h4>({data.id}) {data.text}</h4>
    <p style={{ color: '#ccc' }}>{data.details}</p>
  </div>
)
