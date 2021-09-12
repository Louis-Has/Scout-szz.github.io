const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const fsp = fs.promises

const mime = require('mime')

const baseDir = 'D:/2-Code/github-damiao/miao'


let server = http.createServer()


let port = 80

server.listen(port, () => {
    console.log('Now connecting with ', port)
})


//req 客户端发来的请求，含有请求相关的信息
//res 对客户端的响应，通过res响应客户端
server.on('request', async (req, res) => {
    console.log(req.method, '>', req.url)

    if (req.url === '/favicon.ico') {
        let img = fs.readFileSync('./miao/faviconn.ico')
        res.write(img)
        res.end()
        return
    }

    let decodeUrl = decodeURIComponent(url.parse(req.url).pathname)
    let targetPath = path.join(baseDir, decodeUrl)
    console.log(targetPath)


    try {
        let start = await fsp.stat(targetPath)

        if (start.isFile()) {

            // is file
            try {
                let data = await fsp.readFile(targetPath)
                let type = mime.getType(targetPath)

                res.writeHead(200, { 'Content-Type': type })
                res.write(data)
                res.end()

            } catch (err) {
                res.writeHead(404)
                res.write('404 Not Found')
                res.end()
            }

        }

        if (start.isDirectory()) {

            // is  directory
            let entries = await fsp.readdir(targetPath, { withFileTypes: true })

            // let fileStats = await Promise.all(filenames.map(name => path.join(targetPath, name)).map(fsp.stat))

            // let fileStats = []
            // for (let name of filenames) {
            //     let stat = await fsp.stat(path.join(targetPath, name))
            //     fileStats.push(stat)
            // }

            res.writeHead(200, {
                'Content-Type': 'text/html;charset=UTF-8'
            })
            res.write(`
            <h1>Index of${decodeUrl}</h1>
            <div>${entries.map((entry) => {
                let slash = entry.isDirectory() ? '/' : ''
                return `<div><a href='${entry.name}${slash}'>${entry.name}${slash}</a></div>`
            }).join('')}
            <p>
                Node.js ${process.version}/ the static server running @${req.socket.localAddress}:${port}
            </p>
            </div>`)
            res.end()
        }

    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404)
            res.writeHead('404 Not Found')
            res.end()
        } else {
            throw err
        }
    }

})




