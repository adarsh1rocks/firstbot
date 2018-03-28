'use strict'
const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')

const app=express()

app.set('port',(process.env.PORT || 3000))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send("hi i am chatbot")
})

app.get('/webhook/',function(req,res){
    if(req.query['hub.verify_token']=="adarsh"){
        res.send(req.query['hub.challenge'])
        
    }
    res.send("wrong token,get the right one")
})
app.listen(app.get('port'),function(){
    console.log("running port hiii")
})