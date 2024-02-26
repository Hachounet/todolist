import ToDo from "./todo";

export default class Project {
    constructor(title, description, id){
      this.title = title,
      this.description = description
      this.id = id
      this.todosList = [];
    }
  
    addToDo(title, description, priority){
      const newToDo = new ToDo(title, description, priority, this.todosList.length)
      this.todosList.push(newToDo);
    }
  
    removeToDo(id){
      this.todosList = this.todosList.filter((todo) => todo.id !== id);
    }
  
    editToDo(id, propertyName, propertyContent) {
      const index = this.todosList.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        // Check if the property exists in the to-do item
        if (this.todosList[index][propertyName] !== undefined) {
          this.todosList[index][propertyName] = propertyContent;
        } else {
          console.log("Property does not exist:", propertyName);
        }
      } else {
        console.log("Invalid ID:", id);
      }
    }
  
    updateToDoList(){
      this.todosList.forEach((todo, index) => {
        todo.id = index;
      })
    }
  }