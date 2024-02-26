/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


class Module {
    constructor() {
      this.projectsList = []
    }
  
    addProject(title, description) {
      const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, this.projectsList.length)
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

    markAsComplete() {
        
    }
  
  }

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {


    constructor(title, description, id){
      this.title = title,
      this.description = description,
      this.id = id,
      this.complete = false,
      this.todosList = [];
    }
  
    addToDo(title, description, priority){
      const newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, priority, this.todosList.length)
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

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor(title, description, priority, id){
      this.title = title,
      this.description = description,
      this.priority = priority,
      this.id = id
      this.complete = false;
    }
  
  }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.js");




const module = new _module__WEBPACK_IMPORTED_MODULE_0__["default"]();
const project1 = module.addProject("Test", "Testtt");
const project2 = module.addProject("test2", "test2")

console.log("I have created 2 projects")

project1.addToDo("todotitle", "tododescr", "prio8")
project1.addToDo("todo2", "todo2", "p7")

console.log("I have added 2 todos to project1");

module.displayProject();

project1.editToDo(0, "title", "Now changed")
console.log("I have changed toDo id 0")

module.displayProject();
// Call removeToDo after displaying projects
project1.removeToDo(0)
project1.updateToDoList();

console.log("I have deleted odo 0 and updated todolist")

project1.markAsComplete(0)
// Display projects after removing todo
module.displayProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFbEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQzBCOztBQUVYOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7Ozs7QUFJOUIsbUJBQW1CLCtDQUFNO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMucHJvamVjdHNMaXN0ID0gW11cbiAgICB9XG4gIFxuICAgIGFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCB0aGlzLnByb2plY3RzTGlzdC5sZW5ndGgpXG4gICAgICB0aGlzLnByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpXG4gICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG4gIFxuICAgIGRpc3BsYXlQcm9qZWN0KCl7XG4gICAgICB0aGlzLnByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgICB0aGlzLnByb2plY3RzTGlzdCA9IHRoaXMucHJvamVjdHNMaXN0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xuICAgIH1cbiAgXG4gICAgdXBkYXRlUHJvamVjdHMoKSB7XG4gICAgICB0aGlzLnByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmlkID0gaW5kZXg7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtYXJrQXNDb21wbGV0ZSgpIHtcbiAgICAgICAgXG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpe1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pZCA9IGlkLFxuICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlLFxuICAgICAgdGhpcy50b2Rvc0xpc3QgPSBbXTtcbiAgICB9XG4gIFxuICAgIGFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSl7XG4gICAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgdGhpcy50b2Rvc0xpc3QubGVuZ3RoKVxuICAgICAgdGhpcy50b2Rvc0xpc3QucHVzaChuZXdUb0RvKTtcbiAgICB9XG4gIFxuICAgIHJlbW92ZVRvRG8oaWQpIHtcbiAgICAgICAgY29uc3QgSU5ERVggPSB0aGlzLmZpbmRJbmRleEJ5SWQoaWQpO1xuICAgICAgICBpZiAoSU5ERVggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zTGlzdC5zcGxpY2UoSU5ERVgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIElEOlwiLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIGVkaXRUb0RvKGlkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5Q29udGVudCkge1xuXG4gICAgY29uc3QgSU5ERVggPSB0aGlzLmZpbmRJbmRleEJ5SWQoaWQpO1xuICAgICAgaWYgKElOREVYICE9PSAtMSkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvcGVydHkgZXhpc3RzIGluIHRoZSB0by1kbyBpdGVtXG4gICAgICAgIGlmICh0aGlzLnRvZG9zTGlzdFtJTkRFWF1bcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy50b2Rvc0xpc3RbSU5ERVhdW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eUNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQcm9wZXJ0eSBkb2VzIG5vdCBleGlzdDpcIiwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIElEOlwiLCBpZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEluZGV4QnlJZChpZCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zTGlzdC5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBtYXJrQXNDb21wbGV0ZShpZCl7XG4gICAgICAgIGNvbnN0IElOREVYID0gdGhpcy5maW5kSW5kZXhCeUlkKGlkKTtcbiAgICAgICAgaWYgKElOREVYICE9PSAtMSl7XG4gICAgICAgICAgICB0aGlzLnRvZG9zTGlzdFtJTkRFWF1bXCJjb21wbGV0ZVwiXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgXG4gICAgdXBkYXRlVG9Eb0xpc3QoKXtcbiAgICAgIHRoaXMudG9kb3NMaXN0LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG8uaWQgPSBpbmRleDtcbiAgICAgIH0pXG4gICAgfVxuICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQpe1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuICBcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9tb2R1bGVcIjtcblxuXG5cbmNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGUoKTtcbmNvbnN0IHByb2plY3QxID0gbW9kdWxlLmFkZFByb2plY3QoXCJUZXN0XCIsIFwiVGVzdHR0XCIpO1xuY29uc3QgcHJvamVjdDIgPSBtb2R1bGUuYWRkUHJvamVjdChcInRlc3QyXCIsIFwidGVzdDJcIilcblxuY29uc29sZS5sb2coXCJJIGhhdmUgY3JlYXRlZCAyIHByb2plY3RzXCIpXG5cbnByb2plY3QxLmFkZFRvRG8oXCJ0b2RvdGl0bGVcIiwgXCJ0b2RvZGVzY3JcIiwgXCJwcmlvOFwiKVxucHJvamVjdDEuYWRkVG9EbyhcInRvZG8yXCIsIFwidG9kbzJcIiwgXCJwN1wiKVxuXG5jb25zb2xlLmxvZyhcIkkgaGF2ZSBhZGRlZCAyIHRvZG9zIHRvIHByb2plY3QxXCIpO1xuXG5tb2R1bGUuZGlzcGxheVByb2plY3QoKTtcblxucHJvamVjdDEuZWRpdFRvRG8oMCwgXCJ0aXRsZVwiLCBcIk5vdyBjaGFuZ2VkXCIpXG5jb25zb2xlLmxvZyhcIkkgaGF2ZSBjaGFuZ2VkIHRvRG8gaWQgMFwiKVxuXG5tb2R1bGUuZGlzcGxheVByb2plY3QoKTtcbi8vIENhbGwgcmVtb3ZlVG9EbyBhZnRlciBkaXNwbGF5aW5nIHByb2plY3RzXG5wcm9qZWN0MS5yZW1vdmVUb0RvKDApXG5wcm9qZWN0MS51cGRhdGVUb0RvTGlzdCgpO1xuXG5jb25zb2xlLmxvZyhcIkkgaGF2ZSBkZWxldGVkIG9kbyAwIGFuZCB1cGRhdGVkIHRvZG9saXN0XCIpXG5cbnByb2plY3QxLm1hcmtBc0NvbXBsZXRlKDApXG4vLyBEaXNwbGF5IHByb2plY3RzIGFmdGVyIHJlbW92aW5nIHRvZG9cbm1vZHVsZS5kaXNwbGF5UHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==