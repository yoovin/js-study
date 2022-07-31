const addTodo = (todoList) => {
    if (!document.querySelector(".todo-input").value == ""){
        todoList.appendChild(createTodo(document.querySelector(".todo-input").value))
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
    document.querySelector(".todo-button").onclick = () => {addTodo(todoList)}

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            addTodo(todoList)
        }
    })
})