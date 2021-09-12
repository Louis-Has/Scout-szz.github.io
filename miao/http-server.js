let net = require('net')
let fs = require('fs')
const { json } = require('stream/consumers')

let server = net.createServer()


let message = loadMessages()
//LocalStorge-by-JSON
function saveMessages() {
    let str = JSON.stringify(message)
    fs.writeFileSync('./messages.json', str)
}

function loadMessages() {
    try {
        let str = fs.readFileSync('./messages.json')
        return JSON.parse(str)
    } catch (e) {
        return []
    }
}

//服务器接收到客户端连接时触发
server.on('connection', (com) => {

    com.on('data', data => {
        let str = data.toString()
        let [header, body] = str.split('\r\n\r\n')
        let [head, ...headers] = header.split('\r\n')
        let [method, url] = head.split(' ')

        console.log(method, url, body)


        if (method === 'POST' && url === '/liuyan') {
            let info = parseQueryString(body)
            // console.log(info)
            info.time = new Date().toString()
            message.push(info)
            saveMessages()

            //返回主页
            com.write('HTTP/1.1 301 please to this url\r\n')
            com.write('Location:/\r\n')
            com.write('\r\n')
            com.end()
        }


        //新页面
        if (url === '/') {
            com.write('HTTP/1.1 200 ok\r\n')
            com.write('Content-Type: text/html;charset=UTF-8\r\n')
            com.write('\r\n')
            com.write(`
            <form method='POST' action='liuyan'>
                <fieldset>
                <legend>留言板 ${new Date()}</legend>
                Name:<br><input type='text' name='name' class='name'/><br>
                Message:<br><textarea cols='50' rows='5' name='message' class='message'></textarea>

                <button onclick='liuyan()'>Save Message</button>
                </fieldset>
            <form>
            <div id="messagesDiv"></div>
            <script src='msg-board.js'></script>
            `)
            com.end()
        }

        if (url == '/msg-board.js') {
            var data = fs.readFileSync('./msg-board.js')

            com.write('HTTP/1.1 200 OK\r\n')
            com.write('Content-Type: application/javascript\r\n')
            com.write('\r\n')

            com.write(data)
            com.end()
        }


        if (url === '/messages') {
            let data = fs.readFileSync('./messages.json')

            com.write('HTTP/1.1 200 OK\r\n')
            com.write('Content-Type: application/json\r\n')
            com.write('\r\n')

            com.write(data)
            com.end()
        }


        if (url === '/favicon.ico') {
            let img = fs.readFileSync('./faviconn.ico')
            com.write('HTTP/1.1 200 ok\r\n')
            // com.write('Content-Type: image/ico\r\n')
            com.write('\r\n')
            com.write(img)
            com.end()

        }
    })

})


let port = 80

server.listen(port, () => {
    console.log('Now listening on port ', port)
})



function parseQueryString(str) {
    let words = str.split('&')

    let result = { }
    words.forEach(ele => {
        let [key, val] = ele.split('=')
        result[key] = decodeURIComponent(val)
    });
    return result
}