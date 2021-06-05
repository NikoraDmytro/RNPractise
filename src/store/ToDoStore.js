import "react-native-get-random-values";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TodoList {
  constructor() {
    this.TodoList = [
      { name: "Start running every day!", id: uuidv4() },
      { name: "Do the physics!", id: uuidv4() },
    ];
    makeAutoObservable(this);
  }

  addNewTodo(todo) {
    if (!todo.length) return;
    this.TodoList = [...this.TodoList, { name: todo, id: uuidv4() }];
  }
}

export const TodoStore = new TodoList();
