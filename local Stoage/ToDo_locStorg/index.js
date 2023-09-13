// document.querySelector("form").addEventListener("submit", todofun);
//  var todoarr=JSON.parse(localStorage.getItem("todo"))||[];


//  displaytodo();
//  function displaytodo(){
//     document.querySelector("tbody").textContent="";
//     todoarr.map(function(ele,i){
//         var tr= document.createElement("tr");

//     var td1= document.createElement("td");
//     td1.textContent= ele.task;
//     var td2= document.createElement("td");
//     td2.textContent= ele.priority;
//     if(ele.priority==="High"){
//         td2.style.backgroundColor="red";
//     }else{
//         td2.style.backgroundColor="green"
//     }
//     var td3= document.createElement("td");
//     td3.textContent="delete"
    
//     td3.addEventListener("click",function(){
//         deletrow(i);
//     });

//     tr.append(td1,td2,td3);
//     document.querySelector("tbody").append(tr);
//     })
//  }
// function todofun(){
//     event.preventDefault();
//     var task= document.getElementById("task").value;
//     var priority=  document.getElementById("priority").value;

//    var todo= {task:task, priority:priority};
//    todoarr.push(todo);
//    localStorage.setItem("todo", JSON.stringify(todoarr))

   
//     var tr= document.createElement("tr");

//     var td1= document.createElement("td");
//     td1.textContent= task;
//     var td2= document.createElement("td");
//     td2.textContent= priority;
//     if(priority==="High"){
//         td2.style.backgroundColor="red";
//     }else{
//         td2.style.backgroundColor="green"
//     }
//     var td3= document.createElement("td");
//     td3.textContent="delete"
    
//     td3.addEventListener("click",deletrow);

//     tr.append(td1,td2,td3);
//     document.querySelector("tbody").append(tr);
//     displaytodo();
// }

// function deletrow(i){
//     // event.target.parentNode.remove();
//     var res= todoarr.splice(i,1);
//     localStorage.setItem("todo",JSON.stringify(todoarr));
//     displaytodo();
// }

document.querySelector('form').addEventListener("submit",mytodo);

    var todoArr = JSON.parse(localStorage.getItem("todo")) || [] ;
    console.log(todoArr);

    displaytodo();

    function displaytodo(){

       // when we uncomet it task will clear
        // document.querySelector("tbody").append(tr).textContent = ""; refresing 1 +2

        todoArr.map(function (ele){
           

            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.textContent = ele.task;
        
            var td2 = document.createElement("td");
            td2.textContent = ele.priority;
        
            if( ele.priority === "High"){
                td2.style.backgroundColor = "red";
            }
            else{
                td2.style.backgroundColor = "green";
            }
        
            var td3 = document.createElement('td');
            td3.textContent = "Delete";
        
            td3.addEventListener("click", deleteTask);
        
            tr.append(td1,td2,td3);
            document.querySelector("tbody").append(tr);


        })
    }


function mytodo(){
    event.preventDefault();

    var task= document.getElementById("task").value;
    var priority = document.querySelector("#priority").value;

    var todo ={task: task, priority: priority};
    
    todoArr.push(todo);

    console.log(todo);
    // array of Object / todo

    localStorage.setItem("todo", JSON.stringify(todoArr));

    console.log(task,priority);
    
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = task;

    var td2 = document.createElement("td");
    td2.textContent = priority;

    if( priority === "High"){
        td2.style.backgroundColor = "red";
    }
    else{
        td2.style.backgroundColor = "green";
    }

    var td3 = document.createElement('td');
    td3.textContent = "Delete";

    td3.addEventListener("click", deleteTask);

    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);

}

function deleteTask(){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();

}

// todo = []

// submit / add a task => todo.length =1

//todo =[1]
// displayTodo () => => tbody = " " & todo => 1

//submit / add a 2nd task => todo.length =2

//displayTod() => tbody = " " & =>  2

//64+68 = 2 =3

// 1 + 2 = 3 task