const addTodo = (todoList) => {
    if (!document.querySelector(".todo-input").value == ""){
        todoList.appendChild(createTodo(document.querySelector(".todo-input").value)) // todolist에 바로 값을 넣어버림
        document.querySelector(".todo-input").value = ""
    }
}

const createTodo = (todo) => {
    let newTodo = document.createElement("div")
    let todoText = document.createTextNode(todo)
    let checkIcon = document.createElement("i")
    let deleteIcon = document.createElement("i")

    checkIcon.classList.add("todo-check", "fas", "fa-check")
    deleteIcon.classList.add("todo-delete", "fas", "fa-trash")
    newTodo.classList.add("todo-card")

    checkIcon.onclick = () => checkTodo(checkIcon)
    deleteIcon.onclick = () => deleteTodo(deleteIcon)

    newTodo.appendChild(checkIcon)
    newTodo.appendChild(deleteIcon)
    newTodo.appendChild(todoText)
    return newTodo
}

const checkTodo = (elem) => {
    elem.parentNode.classList.toggle("checked")
}

const deleteTodo = (elem) => {
    elem.parentNode.parentNode.removeChild(elem.parentNode)
}

window.onload = (() => {
    let todoList = document.querySelector(".todo-list")
    document.querySelector(".todo-button").onclick = () => {addTodo(todoList)} // onclick -> 누르면 실행되는 함수로 addTodo를 넣어줌

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter" && !e.isComposing) { // 한글입력시 두번 실행되는것을 방지함
            addTodo(todoList)
        }
    })
})