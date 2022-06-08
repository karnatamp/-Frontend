const { response } = require('express')
const express = require('express')

const Router = express.Router()
const todos =[]
Router.get('/',(request,response)=>{
    response.status(200).json(todos)
})

Router.post('/',(req, res)=>{
    //console.log("body:",req.body)
    const{todo}=req.body
    todos.push(todo)

    res.status(200).json(todos)

})

Router.put('/:index',(req,res)=>{
    const {index }=req.params // from the route
    //const {test}=req.params
    console.log(index)
    const{isDone, lable}=req.body
    console.log(isDone,lable)
    console.log("todo: ", todos[index])
})
module.exports = Router