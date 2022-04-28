import TodoFilters from "@components/todo-filters";
import classes from "@assets/styles/components/todo-menu.module.css";
import classNames from "classnames";

function TodoMenu({ completedCount, activeCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <div className={classes.todoMenu}>
      <div className={classes.todoMenu__section}>
        <p className={classes.todoMenu__remaining}>{activeCount || 'No'} {itemWord} left</p>
      </div>
      <div className={classNames(classes.todoMenu__section, classes.todoMenu__section_middle)}>
        <TodoFilters/>
      </div>
      <div className={classes.todoMenu__section}>
        {
          !!completedCount &&
          <button onClick={onClearCompleted} className={classes.todoMenu__clear}>Clear Completed</button>
        }
      </div>
    </div>
  )
}

export default TodoMenu;