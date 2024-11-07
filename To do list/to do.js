const item = document.getElementById("item");
const toDo = document.getElementById("to-do");

item.addEventListener(
     "keyup",
     function (event) {
          if (event.key == "Enter") {
               addToDo(this.value);
               this.value = ""
          }
     }
)
const addToDo = (item) => {
     const listItem = document.createElement("li");
     listItem.innerHTML = `
     ${item}
     <a href="#">X</a>`
     listItem.addEventListener(
          "click",
          function () {
               this.classList.toggle("done")
          }
     )
     listItem.querySelector("a").addEventListener(
          "click",
          function(){
               listItem.remove(item)
          }
     )
     toDo.appendChild(listItem)
}