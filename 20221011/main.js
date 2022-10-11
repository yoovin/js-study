window.onload = (() => {
    // let inputTag = document.getElementById("input")
    let inputTag = document.querySelector("#input")
    let inputButton = document.getElementById("button")
    let textList = document.getElementById("list")

    let todos = document.querySelectorAll(".todo")

    let addTodo = () => {
        if(inputTag.value != ""){
            let li = document.createElement("li")
            let text = document.createTextNode(inputTag.value)
            li.appendChild(text)
            li.classList.add("todo")
            textList.appendChild(li)
            inputTag.value = ""


            todos = document.querySelectorAll(".todo")

            console.log(todos)
        }

        for(let i = 0; i < todos.length; i++){
            todos[i].onclick = () => {
                todos[i].remove()
            }
        }
    }

    inputButton.onclick = () => {
        addTodo()
    }



    inputTag.addEventListener("keydown", (event) => {
        console.log(event.keyCode)
        if(event.keyCode == 13){
            addTodo()
        }
    })

})