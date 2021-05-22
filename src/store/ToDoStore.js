import "react-native-get-random-values";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TodoList {
  constructor() {
    this.ToDoList = [
      { name: "Start running every day!", id: uuidv4() },
      { name: "Do the physics!", id: uuidv4() },
    ];
    makeAutoObservable(this);
  }

  addNewTodo(toDo) {
    this.ToDoList = [...this.ToDoList, { name: toDo, id: uuidv4() }];
  }
}

export const ToDoStore = new TodoList();
