const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()
app.use(express.json())
const JWT_SECRET=generateToken()
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

const user=[]
app.post('/signup',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const token=generateToken()
    user.push({
        username:username,
        password:password,
        token:token
    })
    res.json({
        message:"You are signed up",
        token:token
    })
})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password

    const userr=user.find((u=>u.username===username && u.password===password))
    if(userr){
        const token=jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({
            message:"you are signed in",
            token:token
        })
    }else{
        res.json({
            message:"Invalid username and password"
        })
    }
})

app.get('/me',(req,res)=>{
    const token=req.headers.token
    const decodedINformation=jwt.verify(token,JWT_SECRET)
    const username=decodedINformation.username
    const userr=user.find((u=> u.token===token))
console.log(userr)
    if(userr){
        res.json({
            username:userr.username,
            password:userr.password
        })   
    }else{
        res.json({
            message:"token invalid"
        })
    }
})


console.log(generateToken())

app.listen(3000)