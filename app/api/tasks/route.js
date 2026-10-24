import {Task} from "../../model/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/app/helper/db";
import { getResponseMessage } from "../../helper/responseMessage";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

connectDb()

export  async function GET(request) {
    try {
        await connectDb();
        const tasks = await Task.find();
        
        return NextResponse.json(tasks, { status: 200, statusText: "OK" });
    }catch (error) {
        console.error("Error fetching tasks:", error);
        return getResponseMessage('error in getting data Amit', 404, false);
    }

} 

export async function POST(request) {
      const { title, content, status, userId } = await request.json(); 

         try {
           await connectDb();
            const cookieStore = await cookies();
            const token = cookieStore.get('logintoken')?.value;

   
         
    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized. Please login first."
        },
        {
          status: 401
        }
      );
    }

    // Token verify
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("LOGGED IN USER:", decoded._id);


            const task = new Task({ title, content, status, userId:decoded._id });
            let createdTask = await task.save();
             

           return NextResponse.json(createdTask, { message: "Task created successfully", task: createdTask },
            { title:'', 
            content:'', 
             status:'',
            userId:'' },
             { status: 201, statusText: "Created" });

         }catch (error) {
            console.error("Error creating task:", error);
           return getResponseMessage('error in post data Amit', 404, false)
         } 
          
  }


