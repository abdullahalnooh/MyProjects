const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

toDoBtn.addEventListener('click',addToDo);
toDoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded',getTodo)


function addToDo(event) {
	
	 event.preventDefault();

	 // to do div
	 const toDoDiv = document.createElement('div');
	 toDoDiv.classList.add("todo");


	 // add todo tolocal 
	 saveLocalTodo(toDoInput.value);
 	
	 // create li 
	 const toDoLi = document.createElement('li');
	 toDoLi.innerText =toDoInput.value;
	 toDoLi.classList.add('todo-item');
	 toDoDiv.appendChild(toDoLi);

	 // checkmark btn
	 const completeBtn = document.createElement('button');
	 completeBtn.innerHTML = '<i class="fas fa-check"> </i>';
	 completeBtn.classList.add("complete-Btn")
	 toDoDiv.appendChild(completeBtn);
	 // trash mark 
	 const trashBtn = document.createElement('button');
	 trashBtn.innerHTML = '<i class="fas fa-trash"> </i>';
	 trashBtn.classList.add("trash-btn")
	 toDoDiv.appendChild(trashBtn);
	 // append to list
	 toDoList.appendChild(toDoDiv);

	 // clear todo input value
	 toDoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall");
        removeTodo(todo);
        todo.addEventListener('transitionend',function(){
        todo.remove();

        });
 }
     // check mark
     if (item.classList[0] === "complete-Btn") {
     	const todo = item.parentElement;
     	todo.classList.toggle('completed');

     }


}

function saveLocalTodo(todo) {
	// check if there something
	var toDos;
	if (localStorage.getItem("toDos") === null) {
		toDos = [];
	}else{
		toDos = JSON.parse(localStorage.getItem("toDos"));
	}
	toDos.push(todo);
	localStorage.setItem("toDos" , JSON.stringify(toDos));
		
}

function getTodo(todo) {
	var toDos;
	if (localStorage.getItem("toDos") === null) {
		toDos = [];
	}else{
		toDos = JSON.parse(localStorage.getItem("toDos"));
	}

	toDos.forEach(function(todo) {
		 // to do div
		 const toDoDiv = document.createElement('div');
		 toDoDiv.classList.add("todo");
	 	
		 // create li 
		 const toDoLi = document.createElement('li');
		 toDoLi.innerText = todo;
		 toDoLi.classList.add('todo-item');
		 toDoDiv.appendChild(toDoLi);

		 // checkmark btn
		 const completeBtn = document.createElement('button');
		 completeBtn.innerHTML = '<i class="fas fa-check"> </i>';
		 completeBtn.classList.add("complete-Btn")
		 toDoDiv.appendChild(completeBtn);
		 // trash mark 
		 const trashBtn = document.createElement('button');
		 trashBtn.innerHTML = '<i class="fas fa-trash"> </i>';
		 trashBtn.classList.add("trash-btn")
		 toDoDiv.appendChild(trashBtn);
		 // append to list
		 toDoList.appendChild(toDoDiv);
	})
}

function removeTodo(todo) {
	var toDos;
	if (localStorage.getItem("toDos") === null) {
		toDos = [];
	}else{
		toDos = JSON.parse(localStorage.getItem("toDos"));
	}
	var todoIndex = todo.children[0].innerText;
	toDos.splice(toDos.indexOf(todoIndex), 1);
	localStorage.setItem("toDos",JSON.stringify(toDos));
	}
	 