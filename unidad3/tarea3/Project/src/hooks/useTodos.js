import { useState } from "react";
import { handleShowError } from "../helpers/handleShowError";
import ModalTodo from "../components/tarea3/ModalTodo";

const TODO_TYPES = {
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  SET_MODAL_VISIBLE: "SET_MODAL_VISIBLE",
  SET_EDIT_MODE: "SET_EDIT_MODE",
  
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  EDIT_TODO: "EDIT_TODO",
};

const initialState = {
  inputValue: "",
  todos: [],
  editMode: false,
  todoID: null, 
  todo: null,

  modalVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case TODO_TYPES.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case TODO_TYPES.SET_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload,
      };
    case TODO_TYPES.SET_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload,
      };
    case TODO_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().toISOString(),
            name: state.inputValue,
            createdDate: new Date().toLocaleString(),
            isCompleted: false,
          },
        ],
        inputValue: "",
      };
    case TODO_TYPES.DELETE_TODO:
      const filteredArray = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return {
        ...state,
        todos: filteredArray,
      };
    case TODO_TYPES.COMPLETE_TODO:
      const mappedArray = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      });

      return {
        ...state,
        todos: mappedArray,
      };
    case TODO_TYPES.EDIT_TODO:
      const mappedArray2 = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            name: state.inputValue,
            isEdited: true,
            editDate: new Date().toLocaleString(),
          };
        }

        return todo;
      });

      return {
        ...state,
        todos: mappedArray2,
        inputValue: "",
        editMode: false,
      };
    default:
      return state;
  }
}


export const useTodos = () => {

  const [todoState, todoDispatch] = useReducer(reducer, initialState);

  return {
    todoState,
    todoDispatch,
  }
};