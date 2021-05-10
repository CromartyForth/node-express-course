const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())


const mockUserData = [
    {name: 'Jack', hash: "SuperSecret99", secretData: "Likes flowers", bearer: ""},
    {name: 'Jill', hash: "1234567", secretData: "Likes Jack", bearer: ""},
    {name: 'Billy', hash: "Boris7991", secretData: "Likes guns!", bearer: ""}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData.name
    })
})

app.get('/users/:id',function(req,res){
    
    const found = mockUserData.find(element => element.name === req.params.id)
    
    if (found){
        console.log(req.params.id)
        res.json({
        success: true,
        message: 'got one user',
        user: found.name
    })
    }
    else {
        console.log(req.params.id)
        res.json({
        success: false,
        message: 'user not found',
        user: req.params.id
    })
    }
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.get('/secret',function(req,res){

})






app.listen(8000,function(){console .log("server is running")})