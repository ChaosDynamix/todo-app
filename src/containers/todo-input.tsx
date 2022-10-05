import { connect } from "react-redux";
import TodoAdd from "@components/TodoAdd";
import { getCompletedTodoCount } from "@selectors/selectors";
import { bindActionCreators } from "redux";
import * as TodoActions from "@actions/index";

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd)