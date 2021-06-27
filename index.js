const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() { 
  
  var ul = document.getElementsByTagName("ul")
  console.log(ul)
  var liElement = ul[0].remove(ul[0]);
  
 cosasQueAprendimos.forEach((item)=>{

    var liEl = document.createElement("li") 
 
    var text = document.createTextNode(item.tema)
  
    liEl.appendChild(text)
    
    //console.log(liEl)
    
 })

// for (let iterator of cosasQueAprendimos) {
//   var newLi = document.createElement("li")
//   newLi.textContent = iterator.tema;
//   newLi.classList.add(iterator.class||"item")
//   ul.appendChild(newLi)
// }

  
 } 
main();
