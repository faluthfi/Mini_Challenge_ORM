const express=require('express');
const app=express();
const {User} = require('./models');
const port=3000;

app.use(express.json())

app.get('/users', (req, res) => {
    User.findAll()
        .then(articles => {
            res.status(200).json(articles)
        })
})

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
        .then(article => {
            res.status(201).json(article)
        }).catch(err => {
            res.status(422).json("Can't create article")
        })
})

app.listen(port,(req,res)=>{
    console.log(`Server Running on port ${port}`)
});