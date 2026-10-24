import { NextResponse } from "next/server";
import { connectDb } from "@/app/helper/db";
import { User } from "@/app/model/user/user";
import bcrypt from "bcryptjs";

export async function GET(request) {
  let users = [];
  try {
    await connectDb();
    users = await User.find().select("-password -__v").lean();
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      { message: "Error fetching users data", error: error.message },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
  return NextResponse.json(users);
}

// create User
export async function POST(request) {
  try {
    await connectDb();
    const { name, email, password, about, profileImage } = await request.json();

    console.log("Received data:", {
      name,
      email,
      password,
      about,
      profileImage,
    });
    const user = new User({ name, email, password, about, profileImage });

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT));
    user.password = hashedPassword;

    const createdUser = await user.save();
    const response = {
      message: "User created successfully",
      user: createdUser,
    };
    return NextResponse.json(response, { status: 201, statusText: "Created" });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user Amit", error: error.message },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export function PUT(request) {}

export function DELETE(request) {

    
  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 208, statusText: "Already Reported" },
  );
}
