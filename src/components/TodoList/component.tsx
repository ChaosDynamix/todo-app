import Todo from "@components/Todo";
import TodoMenu from "@components/TodoMenu";
import { FunctionComponent } from "react";
import classes from "./style.module.css";

interface Props {
  filteredTodos: AppData.Todo[];
  todosCount: number;
  completedCount: number;
}

const TodoList: FunctionComponent<Props> = ({filteredTodos, todosCount, completedCount, actions}) => {
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