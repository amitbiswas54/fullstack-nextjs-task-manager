import { NextResponse } from "next/server";
import { getResponseMessage } from "../../../helper/responseMessage";
import { Task } from "../../../model/task";
import { connectDb } from "@/app/helper/db";

export async function GET(request, { params }) {
connectDb()
  const { taskid } = await params;
  try {

    await connectDb()

    

    const taskSingle = await Task.findById(taskid);

    return NextResponse.json(taskSingle);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {

  try {
  await connectDb()
  
  const { taskid } = await params;
  
    const {title, content, status} = await request.json()
  let taskUpdate =  await Task.findById(taskid)

  taskUpdate.title = title;
  taskUpdate.content = content;
  taskUpdate.status = status;

  const updateTask = await taskUpdate.save()

  return NextResponse.json(updateTask)
     
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {

  const { taskid } = await params;

  try {
    await connectDb();

    const taskSingle = await Task.findByIdAndDelete(taskid);

    if (!taskSingle) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Task deleted successfully",
        task: taskSingle
      },
      { status: 200 }
    );

  } catch (error) {

    console.log({
      amit_error_message: error
    });

    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}