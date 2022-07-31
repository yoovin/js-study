const sendMessage = () => {
    const message = document.querySelector("#input-message").value
    document.querySelector("#input-message").value = ""
}

window.onload = () => {
    let username

    document.querySelector(".start-button").onclick = () => {
        username = document.querySelector("#user-name").value
        console.log(username)
        document.querySelector(".start-screen").classList.add("invisible")
        document.querySelector(".main-screen").classList.remove("invisible")
    }

    document.querySelector(".send-button").onclick = () => {
        sendMessage()
    }

    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            sendMessage()
        }
    })
}