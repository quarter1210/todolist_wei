let section = document.querySelector("section");
let todo_list_text;

let add = document.querySelector("form button");
add.addEventListener("click", e =>{
    e.preventDefault();
    
    let todo_input = document.getElementById("todoinput").value;
    sessionStorage.setItem(todo_input,todo_input);//
    let todo_state = document.getElementById("todostate").value;
    sessionStorage.setItem(todo_state, todo_state);//

    let todo_list = document.createElement("div");
    todo_list.classList.add("todo_list");
    todo_list_text = document.createElement("p");
    todo_list_text.classList.add("todo_p");
    todo_list_text.innerText = sessionStorage.getItem(todo_input) ;//
    todo_list.appendChild(todo_list_text);
    
    let todo_list_state = document.createElement("button");
    todo_list_state.classList.add("todo_btn_state");
    todo_list_state.innerText="COM";
    todo_list_state.addEventListener("click", e =>{
        let text = e.target.parentElement.children[0];
        console.log(text);
        text.classList.toggle("completed");
    
})

    let todo_list_del = document.createElement("button");
    todo_list_del.classList.add("todo_btn_del");
    todo_list_del.innerText="DEL";
    todo_list_del.addEventListener("click", e =>{
        let list_name = todo_list_del.parentElement.children[0].innerText;
        console.log(list_name);
        let list_array = localStorage.getItem(todo_input);
        console.log(list_array);
        if (list_array == list_name){
            sessionStorage.removeItem(todo_input);
        }
        
        todo_list.remove();
    })


    if(todo_state == "completed" ){
        todo_list_text.classList.add("completed");
    }

    
    todo_list.appendChild(todo_list_state);
    todo_list.appendChild(todo_list_del);

    section.appendChild(todo_list);

    
    
    
})





