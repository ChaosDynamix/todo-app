import Switch from "@components/Switch"
import React, {FunctionComponent, useState} from "react";
import classes from "./style.module.css";

const TodoAdd: FunctionComponent = ({actions, todosCount, completedCount}) => {
  const [text, setText] = useState("");

  function handleKeydown(event: React.SyntheticEvent<HTMLInputElement, KeyboardEvent>) {
    const userInput = event.target.value.trim();
    if (event.key === "Enter") {
      if (userInput.length > 0) {
        actions.addTodo(userInput);
      }
      setText("");
    }
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className={classes.todoAdd}>
      <Switch
        id="check-all-input"
        checked={completedCount === todosCount && todosCount > 0}
        onClick={actions.completeAllTodos}
        readOnly
      />
      <input
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value={text}
        className={classes.todoAdd__input}
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  )
}

export default TodoAdd