import TodoFilter from "@containers/todo-filter";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "@constants/todo-filters";
import classes from "./style.module.css";
import { FunctionComponent } from "react";

interface Filters {
  [key: string]: string;
}

const FILTER_TITLES: Filters = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const TodoFilterList: FunctionComponent = () => {
  return (
    <div className={classes.todoFilters}>
      {Object.keys(FILTER_TITLES).map(filter =>
        <TodoFilter key={filter} filter={filter}>
          {FILTER_TITLES[filter]}
        </TodoFilter>
      )}
    </div>
  );
}

export default TodoFilterList;