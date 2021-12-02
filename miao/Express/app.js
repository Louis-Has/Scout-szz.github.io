const express = require('express')
const fs = require('fs')
const { dirname } = require('path')
const cookieParser = require('cookie-parser')
const { post } = require('jquery')
const moment = require('moment')
const betterSqlite3 = require('better-sqlite3')

const db = new betterSqlite3(__dirname + '/userDatas/usersDatas.sqlite3')

const app = express()
let port = 80

app.listen(port, () => {
    console.log('Now is listening with ' + port)
})

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


app.use(cookieParser('cookie sign secert'))
// app.use(express.static(__dirname + '/static'))
app.use(express.json())
app.use(express.urlencoded())


// 用户 及  留言 数据
// let userDatas = loadMessages('users.json')
// let postMessages = loadMessages('postMessages.json')


// function loadMessages(data) {
//     try {
//         let str = fs.readFileSync(`./miao/Express/userDatas/${data}`)
//         return JSON.parse(str)
//     } catch (e) {
//         return []
//     }
// }

app.get('/favicon.ico', (req, res, next) => {
    res.sendFile('../faviconn.ico')
    return
})

//主页
app.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    if (req.signedCookies.loginName) {
        res.redirect('/post')
    } else {
        res.end(`
        <h1>Home Page.</h1>
        <div>
        <a href='/login'>登录</a>
        <a href='/register'>注册</a>
        </div>
        `)
    }
})

//注册
app.route('/register')
    .get((req, res, next) => {
        res.sendFile(__dirname + '/static/register.html')
    })
    .post((req, res, next) => {
        // console.log(req.body)
        let regInfo = req.body
        let nameCheck = /^[0-9a-z_]+$/i
        if (!nameCheck.test(regInfo.name)) {
            res.status(400)
            res.end('userName isnot invalid...')
            // } else if (userDatas.some(it => it.name === regInfo.name)) {
            //     res.status(400)
            //     res.end('userName has already exists...')
        } else if (regInfo.password == 0) {
            res.status(400)
            res.end('password may not be ampty...')
            // } else if (userDatas.some(it => it.email === regInfo.email)) {
            // res.status(400)
            // res.end('userEmail has already exists...')
        } else {
            // userDatas.push(regInfo)
            // fs.writeFileSync('./miao/Express/userDatas/users.json', JSON.stringify(userDatas, null, 2))
            let adduser = db.prepare('insert into users (name, password, email) values (?, ?, ?)')
            let result = adduser.run(regInfo.name, regInfo.password, regInfo.email)
            console.log(result)
            res.end('register success...')
        }
    })

//登录
app.route('/login')
    .get((req, res, next) => {
        // res.sendFile(__dirname + '/static/login.html')
        res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        res.end(`
        <form action="" method="POST">
        <h1>Login</h1>
            <div>Username:</div>
            <input type="text" name="name">
            <div>Password:</div>
            <input type="password" name="password">
            <input hidden name='returnto' value='${req.headers.referer || '/'}'>
            <button>Login</button>
        </form>
        `)
    })
    .post((req, res, next) => {
        // console.log(req.body)
        let regInfo = req.body
        console.log(regInfo)
        let userStmt = db.prepare('select * from users where name = ? and password = ?')
        let user = userStmt.get(regInfo.name, regInfo.password)
        if (user) {
            res.cookie('loginName', regInfo.name, {
                signed: true
            })
            res.redirect(regInfo.returnto || '/')
        } else {
            res.end('Login fail.')
        }
    })

//登出
app.route('/logout')
    .get((req, res, next) => {
        res.clearCookie('loginName')
        res.redirect(req.headers.referer || '/')
    })



//留言板
app.route('/post')
    .get((req, res, next) => {
        let postMessages = db.prepare('select * from posts').all()

        let page = Number(req.query.page || 1)
        let pageSize = 10
        let pageStart = (page - 1) * pageSize
        let pageEnd = page * pageSize

        res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        res.end(`
        <nav style="position:fixed;right:24px;backgrounf-color:#F6F6F6">
        <a href="/post">留言板</a>
        ${req.signedCookies.loginName ? `
            <a href="/">Hello${req.signedCookies.loginName}</a>
            <a href="/logout">登出</a>
            `: `
            <a href="/register">注册</a>
            <a href="/login">登录</a>
            `}
        </nav>

        ${req.signedCookies.loginName ? `
        <form action="" method="POST" style="position:fixed;top:30px;right:24px">
        <h1>Post</h1>
        <div>Title: </div>
        <input type="text" name="title" size='30'>
        <div>Content: </div>
        <textarea name="content" rows='8' cols='32'></textarea>
        <button>Post</button>
        </form>
        `: `
        <h1 style="position:fixed;top:30px;right:24px">请先登录</h1>
        `}

        <div>
        ${postMessages.slice(pageStart, pageEnd).map((it) => {
            let postBy = db.prepare('select * from users where userId = ?').get(it.userId)
            return `<div style='width:60%;border:1px solid black'>
            <h3>${it.postId}.<a href='/post/${it.postId}'>${it.title}</a></h3>
            <p>${postBy.name}--${it.timestamp}</p>
            </div>`
        }).reverse().join('')}
        </div>

        <ul>
            <a href='/post/?page=${page - 1}'>上一页</a>
            <a href='/post/?page=${page + 1}'>下一页</a>
        </ul >
        `)
    })
    .post((req, res, next) => {
        let postedBy = req.signedCookies.loginName
        if (postedBy) {
            let postInfo = req.body
            postInfo.userId = db.prepare('select * from users where name = ?').get(postedBy).userId
            postInfo.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
            // postInfo.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
            // postInfo.postedBy = postedBy
            // postInfo.comments = []
            // postMessages.push/(postInfo)
            console.log(postInfo.userId)
            db.prepare('insert into posts (title,content,userId,timestamp) values (?,?,?,?)')
                .run(postInfo.title, postInfo.content, postInfo.userId, postInfo.timestamp)
            // fs.writeFileSync(`./miao/Express/userDatas/postMessages.json`, JSON.stringify(postMessages, null, 2))
            res.redirect('/post')
        } else {
            res.end('401 not login')
        }
    })

//帖子页面
app.route('/post/:id')
    .get((req, res, next) => {
        let postById = req.params.id
        let post = db.prepare('select * from posts where postId = ?').get(postById)
        let postBy = db.prepare('select * from users where userId = ?').get(postById)
        let comments = db.prepare('select * from comments where postId = ?').all(postById)
        console.log(post)
        if (post) {
            res.setHeader('Content-Type', 'text/html;charset=UTF-8')
            res.end(`
            <nav style="position:fixed;right:24px;backgrounf-color:#F6F6F6" >
            <a href="/post">留言板</a>
            ${req.signedCookies.loginName ? `
                <a href="/">Hello${req.signedCookies.loginName}</a>
                <a href="/logout">登出</a>
                `: `
                <a href="/register">注册</a>
                <a href="/login">登录</a>
                `}
            </nav>

            ${req.signedCookies.loginName ? `
            <form action="" method="POST" style="position:fixed;top:30px;right:24px">
            <h1>盖楼</h1>
            <div>Comment: </div>
            <textarea name="content" rows='8' cols='32'></textarea>
            <button>Post</button>
            </form>
            `: `
            <h1 style="position:fixed;top:30px;right:24px">请先登录</h1>
            `}

        <h2>${post.title}</h2>
        --${postBy.name}--${post.timestamp}
        <p>${post.content}</p>
        <br>

        <div>
            ${comments ? comments.map((it, i) => {
                return `<div style='width:60%;border:1px solid black'>
                <p>${i + 1}--${it.timestamp}</p>
                <h4>${it.content}</h4>
                </div>`
            }).reverse().join('') : []}
        </div>
        `)
            // console.log(post.comments.length, 'coments');
        } else {
            res.end(`404 Not Found!`)
        }
    })
    .post((req, res, next) => {
        let postedBy = req.signedCookies.loginName
        if (postedBy) {
            let postInfo = req.body
            postInfo.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
            postInfo.userId = db.prepare('select * from users where name = ?').get(postedBy).userId
            // postMessages[req.params.id].comments.push(postInfo)
            db.prepare('insert into comments (content,postId,userId,timestamp) values (?,?,?,?)')
                .run(postInfo.content, req.params.id, postInfo.userId, postInfo.timestamp)
            // fs.writeFileSync(`./miao/Express/userDatas/postMessages.json`, JSON.stringify(postMessages, null, 2))
            res.redirect(`/post/${req.params.id}`)
        } else {
            res.end('401 not login')
        }
    })