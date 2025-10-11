import { PrismaClient } from "@prisma/client";
import express from 'express'
const prisma = new PrismaClient();
const app=express()
app.use(express.json())

app.get('/',async(req,res)=>{
    const result=await prisma.boss.findMany()
    console.log(result)
    res.json({
        result
    })
})
app.listen(3000,()=>{
    console.log('server is running on 3000')
})
async function insertUser(username: string, password: string, age: number, city: string) {
 const res = await prisma.boss.create({
    data: {
        username,
        password,
        age,
        city
       
    }
  })
  console.log('loading.......')
  console.log(res);
}

await insertUser('raju','helliifna',25,'joshi')


const findUser=async(userId:number)=>{
    const res=await prisma.boss.findFirst({
       where:{
        id:userId
       }
    })
    console.log(res)
}
// await findUser(1)

const updateUser=async()=>{
    const res=await prisma.boss.update({
        where:{
            id:1
        },
        data:{
            password:'pandheufka',
            city:'garur'
        }
    })
    console.log(res)
}
updateUser()