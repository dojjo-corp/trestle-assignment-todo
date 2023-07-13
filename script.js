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

var darkThemeToggle = document.querySelector("dark");
darkThemeToggle.addEventListener("click", function(){

  // set dark baxkheound 
  page.style.backgroundImage = bgImageDark;
  page.childElements.forEach(function(elem){
    
  })
})
