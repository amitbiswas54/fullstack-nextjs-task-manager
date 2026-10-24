import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/model/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/app/helper/db";
import mongoose from "mongoose";


connectDb()

export async function GET(request, { params }) {
  const { userid } = await params;


  try {

    await connectDb();
    const assignTask = await Task.find({ userId: userid });
    console.log("USER ID:", userid);

    console.log("ASSIGNED TASKS:", assignTask);
    console.log("USER ID:", userid);

    return NextResponse.json(assignTask);
  } catch (error) {
    console.error("Error fetching assigned tasks:", error);

    return getResponseMessage(
      "Failed to get task",
      400,
      false
    );
  }
}