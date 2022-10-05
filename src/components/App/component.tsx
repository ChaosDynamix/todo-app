import Header from "@components/Header";
import TodoInput from "@containers/todo-input";
import TodoList from "@containers/todo-list";
import {FunctionComponent, useEffect, useState} from "react";
import Background from "@components/Background";
import Container from "@components/Container";
import Foreground from "@components/Foreground";
import TodoFilters from "@components/TodoFilterList";
import Tip from "@components/Tip";
import classes from "./style.module.css";

const App: FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={classes.app}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Background isDarkMode={isDarkMode}/>
      <Container>
        <Foreground margin>
          <TodoInput/>
        </Foreground>
        <Foreground margin>
          <TodoList/>
        </Foreground>
        <Foreground mobile>
          <TodoFilters/>
        </Foreground>
        <Tip/>
      </Container>
    </div>
  );
}

export default App;
