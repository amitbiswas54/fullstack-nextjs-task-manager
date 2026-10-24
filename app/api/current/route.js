// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
// import { User } from "@/app/model/user/user";

// export async function GET() {
//   const cookieStore = await cookies();

//   console.log("ALL COOKIES:", cookieStore.getAll());

//   const currentUser = cookieStore.get("logintoken")?.value;

//   console.log("TOKEN:", currentUser);

//   const data = jwt.verify(currentUser, process.env.JWT_SECRET);

//   console.log("JWT DATA:", data);

//   const user = await User.findById(data._id).select("-password -__v").lean();

//   console.log("USER:", user);

//   return NextResponse.json(user);
// }

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { User } from "@/app/model/user/user";
import { connectDb } from "@/app/helper/db";

export async function GET() {
  try {
    
    await connectDb()
    const cookieStore = await cookies();

    console.log("ALL COOKIES:", cookieStore.getAll());

    const currentUser = cookieStore.get("logintoken")?.value;

    console.log("TOKEN:", currentUser);

    if (!currentUser) {
      return NextResponse.json(
        { message: "Login token not found" },
        { status: 401 },
      );
    }

    const data = jwt.verify(currentUser, process.env.JWT_SECRET);

    console.log("JWT DATA:", data);

    const user = await User.findById(data._id).select("-password -__v").lean();

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("USER:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("CURRENT USER ERROR:", error);

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
