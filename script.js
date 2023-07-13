const page = document.body;
const elementsTextChamgedByTheme = [];
const
var darkThemeToggle = document.querySelector("dark");
darkThemeToggle.addEventListener("click", function(){
  page.childElements.forEach(function(elem){
    elem.classList.add("dark-theme");
  })
})
