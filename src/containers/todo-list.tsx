import {connect} from 'react-redux'
import {ActionCreator, bindActionCreators} from 'redux'
import * as TodoActions from '@actions/index';
import TodoList from "@components/TodoList";
import {getCompletedTodoCount, getVisibleTodos} from "@selectors/selectors";

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state),
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions as ActionCreator<unknown>, dispatch)
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList