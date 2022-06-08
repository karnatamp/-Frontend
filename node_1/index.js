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
*/
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

