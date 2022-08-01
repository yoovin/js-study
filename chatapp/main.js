import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io.connect("http://127.0.0.1:3000")

const sendMessage = (socket, username) => {
    const message = document.querySelector("#input-message").value
    if(!message == ""){
        document.querySelector("#input-message").value = ""
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
        document.querySelector(".start-screen").parentNode.removeChild(document.querySelector(".start-screen"))
        document.querySelector(".main-screen").classList.remove("invisible")
        
    }

    document.querySelector(".send-button").onclick = () => {
        sendMessage(socket, username)
    }

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter" && !e.isComposing) {
            sendMessage(socket, username)
        }
    })
}

socket.on("send-message", (data) => {
    receiveMessage(data)
})