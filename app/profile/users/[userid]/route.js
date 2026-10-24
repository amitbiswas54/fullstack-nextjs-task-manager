import { NextResponse } from "next/server";


export async function  DELETE(request, {params}) {
    const userid = await params
    console.log( userid);
    return NextResponse.json(
        { message: "User deleted successfullycxcx", params:userid }, 
        { status: 208, statusText: "Already Reported" }
    )

}

export  async function  POST(request) {
    const body = await request.body
    console.log(body);
    console.log(request.coookies);

    return NextResponse.json(
        { message: "Posting user Data", body:body }, 
        { status: 201, statusText: "Created" }
    )

}