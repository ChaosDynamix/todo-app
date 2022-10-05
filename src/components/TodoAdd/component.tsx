import Switch from "@components/Switch"
import { ChangeEvent, FunctionComponent, KeyboardEvent, useState } from "react";
import classes from "./style.module.css";

interface Props {
  todosCount: number;
  completedCount: number;
}

const TodoAdd: FunctionComponent<Props> = ({actions, todosCount, completedCount}) => {
  const [text, setText] = useState("");

  function handleKeydown(event: KeyboardEvent<HTMLInputElement>) {
    const userInput = event.currentTarget.value.trim();
    if (event.key === "Enter") {
      if (userInput.length > 0) {
        actions.addTodo(userInput);
      }
      setText("");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
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