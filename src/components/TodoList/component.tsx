import Todo from "@components/Todo";
import TodoMenu from "@components/TodoMenu";
import { FunctionComponent } from "react";
import classes from "./style.module.css";

const TodoList: FunctionComponent = ({filteredTodos, todosCount, completedCount, actions}) => {
  return (
    <>
      {
        filteredTodos.length > 0 &&
        <ul className={classes.todoList}>
          {filteredTodos.map((todo, index) => (
            <Todo
              key={index}
              id={`check-id-${index}`}
              todo={todo}
              {...actions}
            />
          ))}
        </ul>
      }
      <TodoMenu
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    </>
  );
}

export default TodoList;