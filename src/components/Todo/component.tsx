import Switch from "@components/Switch";
import classes from "./style.module.css";
import classNames from "classnames";
import { FunctionComponent } from "react";

interface Props {
  id: string;
  todo: AppData.Todo;
}

const Todo: FunctionComponent<Props> = ({id, todo, completeTodo, deleteTodo}) => {
  const todoContentClasses = classNames([
    classes.todo__content,
    {
      [classes.todo__content_completed]: todo.completed,
    }
  ]);

  function handleTodoCompletion() {
    completeTodo(todo.id);
  }

  function handleTodoDeletion() {
    deleteTodo(todo.id);
  }

  return (
    <div className={classes.todo}>
      <div className={classes.todo__fixedSection}>
        <Switch
          id={id}
          checked={todo.completed}
          onChange={handleTodoCompletion}
        />
      </div>
      <div className={classes.todo__fluidSection}>
        <p className={todoContentClasses}>{todo.text}</p>
      </div>
      <div className={classes.todo__fixedSection}>
        <button className={classes.todo__button} onClick={handleTodoDeletion} aria-label="Delete todo">
          <svg className={classes.todo__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Todo