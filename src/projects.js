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
  
    removeToDo(id) {
        const INDEX = this.findIndexById(id);
        if (INDEX !== -1) {
            this.todosList.splice(INDEX, 1);
        } else {
            console.log("Invalid ID:", id);
        }
    }
  
    editToDo(id, propertyName, propertyContent) {

    const INDEX = this.findIndexById(id);
      if (INDEX !== -1) {
        // Check if the property exists in the to-do item
        if (this.todosList[INDEX][propertyName] !== undefined) {
          this.todosList[INDEX][propertyName] = propertyContent;
        } else {
          console.log("Property does not exist:", propertyName);
        }
      } else {
        console.log("Invalid ID:", id);
      }
    }

    findIndexById(id){
        return this.todosList.findIndex((todo) => todo.id === id);
    }

    markAsComplete(id){
        const INDEX = this.findIndexById(id);
        if (INDEX !== -1){
            this.todosList[INDEX]["complete"] = true;
        }

    }
  
    updateToDoList(){
      this.todosList.forEach((todo, index) => {
        todo.id = index;
      })
    }
  }