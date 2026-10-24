
import { User } from "@/app/model/user/user";
import { NextResponse } from "next/server";
import { connectDb } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import mongoose from "mongoose";

connectDb()

export async function DELETE(request, { params }) {
    const { userid } = await params;

    console.log("userid:", userid);
   
    try {
    const deletedUser = await User.findByIdAndDelete({_id:userid});

        console.log("Delete result id is :", userid);

      return NextResponse.json(
        { message: "User deleted successfully Amit Bhai" }, 
        { status: 200, statusText: "OK" }
      );
    }catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ message: "Error deleting user", error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }

    return NextResponse.json({ message: "Amit User deleted successfully" }, { status: 200, statusText: "OK" });

}


export async function GET(request, { params }) {
    const { userid } = await params;

    if (!userid) {
        return NextResponse.json(
            { message: "userid is required" },
            { status: 400, statusText: "Bad Request" }
        );
    }

    try {
        await connectDb();
        const user = await User.findById(userid); // just pass the id directly
        console.log("Fetched user data Ami:", user);

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404, statusText: "Not Found" }
            );
        }

        return NextResponse.json(user, { status: 200, statusText: "OK" });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json(
            { message: "Error fetching user data", error: error.message },
            { status: 500, statusText: "Internal Server Error" }
        );
    }
}

export async function PUT(request, { params }) {
    const { userid } = await params;
    const { name, about, profileImage } = await request.json();
    try {
      const user = await User.findByIdAndUpdate(userid);

      user.name = name; 
      user.about = about;
      user.profileImage = profileImage;

      await user.save();

      return NextResponse.json({ message: "User updated successfully" }, { status: 200, statusText: "OK" });
    }catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ message: "Error updating user not done amit", error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }
      

}

