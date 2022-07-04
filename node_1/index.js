/*
// express i a frame work to do it
const express = require('express')
let bodyParser =require('body-parser')

const todoRouter =require('./routes/todo')
const morgan = require('morgan')
// npm i nodemon -g : to install nodemon environment
// have to use this command for MAC sudo npm i -g nodemon
const app = express()
//app.use(morgan('dev'))
app.use(express.json())
app.use(morgan('dev'))
/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//gitnode
app.get('/', function(request, response){
    return response.status(200).send('it works!')
})

app.post('/', function(request,response){
    console.log(request.body)
    const name = request.body
    if(!name){
        return response.status(200).json('you have to give a name')
    }
    return response.status(200).json(`my name is ${name}`)
})

app.put('/user/:id', function(request,response){
    console.log(request.body)
    const id =request.body
    var json
    return response.status(200).json('got a put rquest');
})

app.use('/todos',todoRouter)
const PORT =4500
app.listen(PORT,function(){
    return console.log(`server is listening on  http://localhost:${PORT}
    `)
})
*/
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')

try {
    mongoose.connect(process.env.DB_URL, {
        authSource: "admin",
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connect to DB !')
} catch (error) {
    console.log("Error DB connection: ", error)
}

const todoRouter = require('./routes/todoRoute')
const messageRouter = require('./routes/messageRoute')
const authRouter = require('./routes/authRoute')

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: (process.env.SESSION_SECURE==='true')?true:false,
        httpOnly: true
    }
}))

app.use(morgan('dev'))
app.use(express.json())

app.get('/', function (request, response) {
    return response.status(200).send('It works !')
})

app.post('/test', (request, response) => {
    const {name} = request.body

    if (!name && name == "") {
        return response.status(500).json('You have to give a name')
    }

    return response.status(200).json(`My name is ${name}`)
})

app.get('/test', (request, response) => {
    return response.status(200).json('It works on /test !')
})

app.use('/todos', todoRouter)
app.use('/messages', messageRouter)
app.use('/', authRouter)

const PORT = 4500
app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})