import { NextResponse } from "next/server";


export async function  GET(request, { params }) {
    const  postid  = await params;

    return NextResponse.json({ message: "Post retrieved successfully", postid: postid }, { status: 200, statusText: "OK" });
} 