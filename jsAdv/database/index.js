const express=require('express')
const {UserModel,TodoModel} =require('./db')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {z}=require('zod')
const app=express()
app.use(express.json())
const zod=require('zod')
const JWT_SWCRET="theboss"

const auth=(req,res,next)=>{
    const token=req.headers.auth
    const response=jwt.verify(token,JWT_SWCRET)

    if(response){
        req.id=response.id
        next()
    }else{
        res.status(403).json({
            message: "Incorrect token"
        })
    }
    
}
const validForm=(req,res,next)=>{
    const requireObj=z.object({
        email:z.email(),
        password:z.string().min(8).max(50),
        name:z.string().min(3).max(50)
    })

    const response=requireObj.safeParse(req.body)
    if(response.success){
        next()
    }else{
        res.json({
            message:"Invalid Format",
            Error:response.error
        })
    }
}

app.post('/signUp',validForm,async(req,res)=>{
     try {
        const email = req.body.email;
        const pass = req.body.password;
        const name = req.body.name;
        
        const exists=await UserModel.findOne({email})
        if(email==='' || pass===''||name===''){
            res.send({message:"all credeantials are require"})
        }else
        if(exists){
              res.json({ message: "Your account is aleady exists" });
        }else{
            const hashedPass=await bcrypt.hash(pass,6)
            await UserModel.create({
                email: email,
                password: hashedPass,
                name: name,
            });
    
            res.json({
                message:"signed up sucessfully"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to sign up" });
        
    }

})

app.post('/signIn',validForm,async(req,res)=>{
    const email=req.body.email
    const pass=req.body.password

    const user= await UserModel.findOne({
            email:email
    })
    if(!user){
        res.json({message:"User is not exist."})
        return
    }
    const passwordMatch=await bcrypt.compare(pass,user.password)
    console.log(passwordMatch)
    console.log(passwordMatch)
    if(passwordMatch){
        console.log(user)
        const token=jwt.sign({id:user._id.toString()},JWT_SWCRET)
        res.json({
            token:token,
            message:"signin succesfully"
        })
    }else{
        res.json({
            message:"Invalid crediatials"
        })
    }
})
app.post('/todo',auth,async(req,res)=>{
    const title=req.body.title
    const isDone=req.body.isDone
    const userId=req.id

    await TodoModel.create({
        title,
        isDone,
        userId
    })
    res.json({
        msg:"sounds good",
        token:req.id
    })
})

app.get('/todos',auth,async(req,res)=>{
    const resp=await TodoModel.find({},'title').then((resp)=>{
        res.json({Message:resp})
    }).catch((e)=>{
        res.json({Error:"no todos are there"})
    })
})


app.listen(3000)