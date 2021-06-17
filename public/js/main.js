const socket = io();

const chat = document.getElementById("chat-form")
const chatMessages = document.querySelector('.chat-messages')
socket.on('message', message => {
    console.log(message)
    sendMessage(message)

    chatMessages.scrollTop = chatMessages.scrollHeight
})

chat.addEventListener('submit', e => {
    e.preventDefault()

    const message = e.target.elements.msg.value

    socket.emit('chat', message)

    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()
})

function sendMessage(msg) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `
    <p class="meta">${msg.username} <span>${msg.time}</span></p>
    <p class="text"> ${msg.message}</p>
    `
    document.querySelector('.chat-messages').appendChild(div)
}