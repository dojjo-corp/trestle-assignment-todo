const page = document.body;

// get css variables for theme toggling
const root = document.querySelector(":root");
const rootVariables = window.getComputedStyle(root);
const bgColorDark = rootVariables.getPropertyValue("--dark-bgcolor");
const bgColorLight = rootVariables.getPropertyValue("--light-bgcolor");
const bgImageDark = rootVariables.getPropertyValue("--dark-bg-image");
const bgImageLight = rootVariables.getPropertyValue("--light-bg-image");
const textColorDark = rootVariables.getPropertyValue("--dark-color-text");
const textColorLight = rootVariables.getPropertyValue("--light-color-text");

const elementsTextChamgedByTheme = [];
const todoList = document.querySelector(".todo-list");
const newTodo = document.querySelector(".item-container");
const newTodoText = document.querySelector("#new-todo");
const todoFooter = document.querySelector(".todo-footer");
const lightThemeToggle = document.querySelector("#light");
const darkThemeToggle = document.querySelector("#dark");
darkThemeToggle.addEventListener("click", function(){
  
  // remove moon and set sun icon
  darkThemeToggle.style.display = "none";
  lightThemeToggle.style.display = "inline";
  
  // set dark baxkheound 
  page.classList.add("dark");
  todoList.classList.add("dark");
  newTodo.classList.add("dark");
  newTodoText.classList.add("dark");
  todoFooter.classList.add("dark");
  page.childElements.forEach(function(elem){
    
  })
})

lightThemeToggle.addEventListener("click", function() {
  // remove moon and set sun icon
  darkThemeToggle.style.display = "inline";
  lightThemeToggle.style.display = "none";
  
  page.classList.remove("dark");
  todoList.classList.remove("dark");
  newTodo.classList.remove("dark");
  newTodoText.classList.remove("dark");
  todoFooter.classList.remove("dark");
})


// todo: get user inout for todo list
let userTodoList = [];
const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", ()=> {
  const newUserTodo = document.querySelector("#new-todo").value;
  const todoReplica = document.querySelector(".todo-list li").cloneNode(true);
  todoReplica.document.querySelector("p").innerText = newUserTodo;
  userTodoList.push(todoReplica);
  todoList.appendChild(todoReplica);

})

