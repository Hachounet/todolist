export default class View {
    constructor() {
        // When View is called, it create a new instance of it and constructor contains all necessary DOM elements that don't need to be dynamic elements. 

        //Creating app div who contains all the app
        this.body = this.getElement("body")
        this.app = this.createElement("div")
        this.app.id = "app"

        this.body.append(this.app)

        // Create 2 divs, one for the menu and one for displaying projects
        this.menu = this.createElement("div");
        this.menu.id = "menu";
        this.projectManager = this.createElement("div");
        this.projectManager.id = "projectManager"

        this.app.append(this.menu);
        this.app.append(this.projectManager);

        // Creating menu interface

        // Creating create Project div and btn
        this.createProjectDiv = this.createElement("div")
        this.createProjectDiv.id = "createProject"
        this.createProjectText = this.createElement("span")
        this.createProjectText.textContent = "Create project"
        this.createProjectBtn = this.createElement("button")
        this.createProjectBtn.classList.add("reset-button")
        this.createProjectBtn.textContent = "+"

        this.createProjectDiv.append(this.createProjectText)
        this.createProjectDiv.append(this.createProjectBtn)

        this.menu.append(this.createProjectDiv)

        // Creating "Create new task" btn

        this.createTaskDiv = this.createElement("div");
        this.createTaskBtn = this.createElement("button")
        this.createTaskBtn.id = "createTaskBtn"
        this.createTaskBtn.textContent = "Create new task"
        this.createTaskBtn.classList.add("reset-button")

        this.createTaskDiv.append(this.createTaskBtn);
        this.menu.append(this.createTaskDiv);
        


    }

    createElement(tag, className){
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    getElement(selector){
        const element = document.querySelector(selector);
        return element
    }



}