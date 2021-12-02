const express = require('express')
const db = require('./db') //连接数据库
const cookieParser = require('cookie-parser')
const accountRouter = require('./account')

const app = express()

const port = 81

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.listen(port, () => {
    console.log('now listning on port', port)
})

app.use(cookieParser('cookieSecret')) // cookie签名的密码
app.use(express.json()) // 解析json请求体的中间件
app.use(express.urlencoded({ extended: true })) // 解析url编码请求体的中间件

//登录功能
app.use('/account', accountRouter)

//请求数据
app.use('/userdata', (req, res, next) => {
    let user = req.signedCookies.logined_user
    let userData = db.prepare(`select * from data_todos where userId = ?`).all(user.userId)
    res.json(userData)
})

//添加todo
app.use('/addtodo', (req, res, next) => {
    let user = req.signedCookies.logined_user
    let todoitem = req.body
    db.prepare(`insert into data_todos (userId,title, content, date) values ( ?, ?, ?, ?)`).run(user.userId, todoitem.title, todoitem.content, todoitem.date)
    let userData = db.prepare(`select * from data_todos where userId = ?`).all(user.userId)
    res.json(userData)
})

app.use(((req, res, next) => {
    res.end('OK')
}))
