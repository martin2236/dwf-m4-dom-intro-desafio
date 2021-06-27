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
  
  var ulEl = document.querySelector(".lista")
  
  var listaEls = document.querySelectorAll(".lista li")
  for (const item of listaEls) {
    item.remove()
  }
  
  
 cosasQueAprendimos.forEach((item)=>{

    var liEl = document.createElement("li") 
 
    var text = document.createTextNode(item.tema)
  
    liEl.appendChild(text)
    
    if(item.class == "special"){
      liEl.classList.add(item.class)
    }
    
    ulEl.appendChild(liEl)
    
 })

 } 
main();
