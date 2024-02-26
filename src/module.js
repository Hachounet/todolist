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
  
    displayProject(){
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

    findIndexById(id){
        return this.projectsList.findIndex((project) => project.id === id);
    }

    markAsComplete(id) {
        const INDEX = this.findIndexById(id);
        if (INDEX !== -1){
            this.projectsList[INDEX]["complete"] = true;
        }
    }
  
  }