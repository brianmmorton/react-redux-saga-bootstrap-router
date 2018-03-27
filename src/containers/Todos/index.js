/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { fetch as fetchTodos } from 'store/todos'

import Todos from './Todos';

const mapStateToProps = ({ user, todos, }) => ({ user, todos, });

const mapActionsToProps = { fetchTodos, }

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(Todos)
