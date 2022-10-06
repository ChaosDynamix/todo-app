import { nanoid } from 'nanoid';
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED,
    REORDER_FROM_FILTERED_TODOS
} from '@constants/action-types';

const initialState = [
    {
        text: 'Complete online JavaScript course',
        completed: true,
        id: 0
    },
    {
        text: 'Jog around the park 3x',
        completed: false,
        id: 1
    },
    {
        text: '10 minutes meditation',
        completed: false,
        id: 2
    },
    {
        text: 'Read for 1 hour',
        completed: false,
        id:3
    },
    {
        text: 'Pick up groceries',
        completed: false,
        id: 4
    },
    {
        text: 'Complete Todo App on Frontend Mentor',
        completed: false,
        id: 5
    },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          {
            id: nanoid(),
            completed: false,
            text: action.text
          },
          ...state
      ];
    case DELETE_TODO:
      return state.filter(todo =>
          todo.id !== action.id
      );
    case EDIT_TODO:
      return state.map(todo =>
          todo.id === action.id 
              ? { ...todo, text: action.text }
              : todo
      );
    case COMPLETE_TODO:
      return state.map(todo =>
          todo.id === action.id 
              ? { ...todo, completed: !todo.completed }
              : todo
      );
    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
      }));
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case REORDER_FROM_FILTERED_TODOS:
      const availableIndexes: number[] = [];
      const newState = state.filter((todo, index) => {
        const filteredTodosHasTodo = action.filteredTodos.find((filteredTodo: AppData.Todo) => filteredTodo.id === todo.id);
        if (filteredTodosHasTodo) {
          availableIndexes.push(index);
          return false;
        }
        return true;
      });
      action.filteredTodos.forEach((filteredTodo: AppData.Todo, index: number) => {
        newState.splice(availableIndexes[index], 0, filteredTodo);
      });
      return newState;
    default:
        return state;
  }
}