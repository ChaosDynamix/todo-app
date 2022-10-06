import Todo from "@components/Todo";
import TodoMenu from "@components/TodoMenu";
import { FunctionComponent, useRef } from "react";
import classes from "./style.module.css";
import {Reorder} from "framer-motion";

interface Props {
  filteredTodos: AppData.Todo[];
  todosCount: number;
  completedCount: number;
}

const TodoList: FunctionComponent<Props> = ({filteredTodos, todosCount, completedCount, actions}) => {
  const constraintsRef = useRef(null);

  return (
    <>
      {
        filteredTodos.length > 0 &&
        <Reorder.Group
          ref={constraintsRef}
          className={classes.todoList}
          axis="y"
          values={filteredTodos}
          onReorder={actions.reorderFromFilteredTodos}
        >
          {filteredTodos.map((todo, index) => (
            <Reorder.Item
              key={todo.id}
              value={todo}
              dragConstraints={constraintsRef}
              dragElastic={0.4}
            >
              <Todo
                id={`check-id-${index}`}
                todo={todo}
                {...actions}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
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