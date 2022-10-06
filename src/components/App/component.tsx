import Header from "@components/Header";
import TodoInput from "@containers/todo-input";
import TodoList from "@containers/todo-list";
import {FunctionComponent, useEffect} from "react";
import Background from "@components/Background";
import Container from "@components/Container";
import Foreground from "@components/Foreground";
import TodoFilters from "@components/TodoFilterList";
import Tip from "@components/Tip";
import classes from "./style.module.css";
import useLocalStorage from "@hooks/use-local-storage";

const App: FunctionComponent = () => {
  const [theme, setTheme] = useLocalStorage(
    "todo-app-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={classes.app}>
      <Header theme={theme} setTheme={setTheme}/>
      <Background theme={theme}/>
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
