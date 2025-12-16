let todo =[]

let req = prompt("Ente the Request")

while(true){
    if(req == "quit"){
        alert("Quitting");
        break;
    }

    if(req == "list"){
        console.log("--------------")
        for(item of todo){
            console.log(item);
        }
        console.log("--------------")
    }
}