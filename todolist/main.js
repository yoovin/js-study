const addTodo = (todoList) => { // 인자로 투두리스트를 받아줍니다.
    if (!document.querySelector(".todo-input").value == ""){ 
        // 만약 투두인풋에 내용이 쓰여있다면
        todoList.appendChild(createTodo(document.querySelector(".todo-input").value)) 
        // createTodo를 통해 만들어준 노드를 todolist에 바로 넣어버림
        document.querySelector(".todo-input").value = ""
        // 투두 인풋을 초기화해줍니다.
    }
}

const createTodo = (todo) => {
    let newTodo = document.createElement("div") // div노드 생성
    let todoText = document.createTextNode(todo) // 투두 내용을 넣어줄 text생성
    let checkIcon = document.createElement("i") // font awesome icon 생성
    let deleteIcon = document.createElement("i")// font awesome icon 생성

    // 비어있는 노드들에 css와 연동되게끔 class를 넣어줍니다.
    checkIcon.classList.add("todo-check", "fa-solid", "fa-check")
    deleteIcon.classList.add("todo-delete", "fa-solid", "fa-trash")
    newTodo.classList.add("todo-card")

    // check와 delete가 실행되게 노드에 onclick시 실행될 함수를 작성해줍니다.
    // 함수의 인자로는 클릭 된 본인 노드를 보내줍니다.
    checkIcon.onclick = () => checkTodo(checkIcon)
    deleteIcon.onclick = () => deleteTodo(deleteIcon)

    // 새로운 Todo노드를 만들어 리턴해줍니다.
    newTodo.appendChild(checkIcon)
    newTodo.appendChild(deleteIcon)
    newTodo.appendChild(todoText)
    return newTodo
}

const checkTodo = (elem) => {
    elem.parentNode.classList.toggle("checked")
    //toggle함수를 통해 미리 정의해둔 checked class를 삽입 혹은 삭제해줍니다.
}

const deleteTodo = (elem) => {
    elem.parentNode.parentNode.removeChild(elem.parentNode)
    // 인자로 받아진 노드의 부모의 부모노드로 거슬러올라가 그곳에서 Todo를 지워줍니다.
}

window.onload = (() => { 
    // HTML로드 시 자바스크립트 파일이 먼저 실행되는것을 막기 위해 onload로 html요소가 다 불러와졌을 때 실행되게끔 해줍니다.
    let todoList = document.querySelector(".todo-list") // 선택자를통해 todolist를 선택
    document.querySelector(".todo-button").onclick = () => {addTodo(todoList)} // onclick -> 누르면 실행되는 함수로 addTodo를 넣어줍니다.

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter" && !e.isComposing) { 
            // 엔터키 입력이 발생하는경우 실행되는 함수
            // 한글입력시 두번 실행되는것을 방지함
            addTodo(todoList)
        }
    })
})