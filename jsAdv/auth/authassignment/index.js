const express=require('express')
const jwt=require('jsonwebtoken')
const JWT_SECRET="shekharpandey10"

const app=express()
app.use(express.json())
const users=[]

const auth=(req,res,next)=>{
    const token=req.headers.token
    const decodedData=jwt.verify(token,JWT_SECRET)

    if(decodedData.username){
        req.username=decodedData.username
        next()
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.post('/signup',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const user=users.find((u=>u.username===username && u.password===password))
    users.push({
        username:username,
        password:password
    })
   
   if(user){
    res.json({
        message:"User already exists"
    })
   }else{
    res.json({
        meassage:"You are signed up"
    })}
})  
app.post('/signin',(req,res)=>{
    const username=req.body.username
    const password=req.body.password

        const user=users.find((u=>u.username===username && u.password===password))

        if(user){
            const token=jwt.sign({
                username
            },JWT_SECRET)
            res.json({
                message:"YOU are signedin",
                username:username,
                token:token

            })
        }else{
            res.json({
                message:"invalid credentials"
            })
        }
})
app.get('/me',auth,(req,res)=>{
            const user=users.find((u=>u.username===req.username))
            res.json({
                username:user.username,
                password:user.password
            })    
})
app.listen(3000)