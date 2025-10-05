import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user:'harkirat',
        email:'shekhar@gmail.com'
    })
}

export function POST(){
    return NextResponse.json({
        user:'hsekhr',
        email:'shekharpost@gmail.com'
    })
}
export function PUT(){
    return NextResponse.json({
        user:'hsekhr',
        email:'shekharpost@gmail.com'
    })
}
export function PATCH(){
    return NextResponse.json({
        user:'hsekhr',
        email:'shekharpost@gmail.com'
    })
}