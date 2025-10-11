import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
  const  data= await req.json()

console.log('data is ',data)
  await PrismaClient.user.create({
    data:{
        username:data.username,
        password:data.password
    }
  })

  return NextResponse.json({
    message:"you signedup"
  })
}