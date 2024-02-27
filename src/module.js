import Project from "./projects";

export default class Module {
    constructor() {
      this.projectsList = []
    }
  
    addProject(title, description) {
      const newProject = new Project(title, description, this.projectsList.length)
      this.projectsList.push(newProject)
      return newProject;
    }
  
    displayAllProjects(){
      this.projectsList.forEach((project) => {
        console.log(project);
      });
    }
  
    deleteProject(id) {
      this.projectsList = this.projectsList.filter((project) => project.id !== id);
    }
  
    updateProjects() {
      this.projectsList.forEach((project, index) => {
        project.id = index;
      });
    }

    findProjectIndexById(id){
        return this.projectsList.findIndex((project) => project.id === id);
    }

    findProjectByName(name){
      return this.projectsList.find(project => project.title === name);
    }

    changeProjectCategory(name, categoryName){
      const INDEX = this.findProjectIndexById(id);
      if ( INDEX !== -1 ){
        this.projectsList[INDEX]["category"] = categoryName;
      }

    }

    markAsComplete(id) {
        const INDEX = this.findProjectIndexById(id);
        if (INDEX !== -1){
            this.projectsList[INDEX]["complete"] = true;
        }
    }
  
  }