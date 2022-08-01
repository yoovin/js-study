import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js"; // socket io 임포트를 위한 주소
const socket = io.connect("http://127.0.0.1:3000") // node서버와 연결

const sendMessage = (socket, username) => {
    const message = document.querySelector("#input-message").value
    if(!message == ""){ // 메시지가 아무것도 없을 때 입력 방지
        document.querySelector("#input-message").value = "" // 입력값을 초기화해줌
        socket.emit("send-message", {user: username, msg: message})
        let newMessage = document.createElement("div")
        let newNameSpace = document.createElement("span")
        const name = document.createTextNode(username)
        const myMessage = document.createTextNode(message)

        newNameSpace.classList.add("name-space")
        newMessage.classList.add("my-chat-message")

        newNameSpace.appendChild(name)
        newMessage.appendChild(newNameSpace)
        newMessage.appendChild(document.createElement("hr"))
        newMessage.appendChild(myMessage)
        document.querySelector(".main-screen").appendChild(newMessage)
    }
}

const receiveMessage = (data) => {
    let newMessage = document.createElement("div")
    let newNameSpace = document.createElement("span")
    const username = document.createTextNode(data.user)
    const message = document.createTextNode(data.msg)

    newNameSpace.classList.add("name-space")
    newMessage.classList.add("chat-message")

    newNameSpace.appendChild(username)
    newMessage.appendChild(newNameSpace)
    newMessage.appendChild(document.createElement("hr"))
    newMessage.appendChild(message)
    document.querySelector(".main-screen").appendChild(newMessage)
}

window.onload = () => {
    let username

    document.querySelector(".start-button").onclick = () => {
        username = document.querySelector("#user-name").value
        document.querySelector(".start-screen").parentNode.removeChild(document.querySelector(".start-screen")) // 시작 시 원래 있던 화면을 지워버림
        document.querySelector(".main-screen").classList.remove("invisible")
    }

    document.querySelector(".send-button").onclick = () => {
        sendMessage(socket, username)
    }

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter" && !e.isComposing) { // 한글입력시 두번 실행되는것을 방지함
            sendMessage(socket, username)
        }
    })
}

socket.on("send-message", (data) => {
    receiveMessage(data)
})