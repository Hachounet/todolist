import Module from "./module";
import View from "./view"
import "./style.scss";

const viewModule = new View();

const module = new Module();
const project1 = module.addProject("Test", "Testtt");
const project2 = module.addProject("test2", "test2")

console.log("I have created 2 projects")

project1.addToDo("todotitle", "tododescr", "prio8")
project1.addToDo("todo2", "todo2", "p7")

console.log("I have added 2 todos to project1");

module.displayAllProjects();

project1.editToDo(0, "title", "Now changed")
console.log("I have changed toDo id 0")

module.displayAllProjects();
// Call removeToDo after displaying projects
project1.removeToDo(0)
project1.updateToDoList();
console.log("Try to display")

console.log("I have deleted odo 0 and updated todolist")

module.markAsComplete(0)
// Display projects after removing todo
module.displayAllProjects();

console.log(`${module.findProjectByName("Test")}`)