let todo = [];

let req = prompt("Ente the Request");

while (true) {
  if (req == "quit") {
    alert("Quitting");
    break;
  }

  if (req == "list") {
    console.log("--------------");
    for(let i=0;i<todo.length;i++) {
      console.log(i,todo[i]);
    }
    console.log("--------------");
  } else if (req == "add") {
    let task = prompt("Enter the task to add");
    todo.push(task);
    console.log(`${task}  task has been added`);
  }
  else if(req == "delete"){
    let idx = prompt("Enter the index to delete");
    todo.splice(idx,1)
    console.log("Item has been deleted")
  }else{
    console.log("invalid request");
  }

  req = prompt("Ente the Request");
}
