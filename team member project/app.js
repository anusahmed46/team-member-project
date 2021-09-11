
var list = document.getElementById("list")



function create() {
  var todo_item = document.getElementById("div3");
  
  // create li tag with text node
  
  var li = document.createElement("li")
  var litext = document.createTextNode(todo_item.value);
  li.appendChild(litext);

  // create delete button
  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("class","delete")
  delbtn.setAttribute("onclick" ,"del(this) ")
  delbtn.appendChild(delText);
console.log(delbtn);