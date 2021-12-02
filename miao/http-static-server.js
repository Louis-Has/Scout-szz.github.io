const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const fsp = fs.promises
const groupBy = require('lodash/groupBy')

const mime = require('mime')

const baseDir = path.resolve('D:/2-Code/github-damiao/miao')


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
    let decodeUrl = url.parse(req.url).pathname
    let decodedUrl = decodeURIComponent(decodeUrl)
    let targetPath = path.join(baseDir, decodedUrl)
    console.log('require >', targetPath)

    //防止请求其他地址的文件
    if (!targetPath.startsWith(baseDir)) {
        res.writeHead(401)
        res.write('Pay Attention: No access!')
        return
    }

    //隐藏.*文件
    let pathParts = req.url.split('/')
    if (pathParts.some(ele => ele.startsWith('.'))) {
        res.writeHead(401)
        res.write('Pay Attention: Hidden File!')
        return
    }

    try {
        let start = await fsp.stat(targetPath)

        if (start.isFile()) {

            // is file
            try {
                let data = await fsp.readFile(targetPath)
                let type = mime.getType(targetPath)

                res.writeHead(200, { 
                    'Access-Contrl-Allow-Origin': '*',
                    'Content-Type': type 
                })
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

            // 如果 directory 不带'/',跳回'/'结尾,search暂时清除
            if (!decodeUrl.endsWith('/')) {
                res.writeHead(302, {
                    location: decodeUrl + '/'
                })
                res.end()
                return
            }

            // 优先展示index.html
            let indexPath = path.join(targetPath, 'index.html')

            try {
                let indexData = await fsp.readFile(indexPath)
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=UTF-8',
                    'Access-Contrl-Allow-Origin': '*',
                })
                res.write(indexData)
                res.end()

            } catch (err) {
                // index.html 不存在 或 是文件夹
                if (err.code === 'ENOENT' || err.code === 'EISDIR') {
                    let entries = await fsp.readdir(targetPath, { withFileTypes: true })

                    // let fileStats = await Promise.all(filenames.map(name => path.join(targetPath, name)).map(fsp.stat))

                    // let fileStats = []
                    // for (let name of filenames) {
                    //     let stat = await fsp.stat(path.join(targetPath, name))
                    //     fileStats.push(stat)
                    // }

                    let filteredEntries = entries.filter(it => !it.name.startsWith('.'))
                    let groupedEntries = groupBy(filteredEntries, it => { return it.isDirectory() ? 'dirs' : 'files' })

                    res.writeHead(200, {
                    'Access-Contrl-Allow-Origin': '*',
                    'Content-Type': 'text/html;charset=UTF-8'
                    })
                    res.write(`
                    <h1>Index of${decodedUrl}</h1>
                    <div>
                    <div style='border-bottom:4px solid #E0C284;width:fit-content'><a style='text-decoration:none' href='../'>../</a></div>
                    <div>${(groupedEntries.dirs || []).map(it => `<div style='border-bottom:4px solid #E0C284;width:fit-content'><a style='text-decoration:none' href='${it.name}/'>${it.name}/</a></div>`).join('')}</div>
                    <div>${(groupedEntries.files || []).map(it => `<div style='border-bottom:1px solid #237FD5;width:fit-content'><a style='text-decoration:none' href='${it.name}'>${it.name}</a></div>`).join('')}</div>
                    <p>
                    Node.js ${process.version}/ the static server running @${req.socket.localAddress}:${port}
                    </p>
                    </div>`)
                    res.end()

                } else {
                    throw err
                }
            }

        }

    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404)
            res.write('404 Not Found')
            res.end()
        } else {
            throw err
        }
    }

})




