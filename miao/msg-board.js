let nameInput = document.querySelector('.name')
let messageInput = document.querySelector('.message')
let messagesDiv = document.querySelector('#messagesDiv')

function liuyan() {
    event.preventDefault()

    let name = nameInput.value
    let message = messageInput.value

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/liuyan')
    xhr.onload = function () {
        // let div = document.createElement('div')
        // div.textContent = name + '-' + message
        // messagesDiv.append(div)
        init()
    }

    xhr.send('name=' + name + '&message=' + message)

    messageInput.textContent = ''
}


function init() {
    //清空div
    messagesDiv.textContent = ''

    let xhr = new XMLHttpRequest()
    xhr.open('get', '/messages')

    xhr.onload = function (e) {
        let messages = JSON.parse(xhr.responseText)
        for (let msg of messages.reverse()) {
            let div = document.createElement('div')
            div.textContent = msg.name + '-' + msg.message
            messagesDiv.append(div)
        }
    }
    xhr.send()
}

init()

