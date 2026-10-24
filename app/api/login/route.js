import { NextResponse } from "next/server";
import { User } from "../../model/user/user";
import { connectDb } from "@/app/helper/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export  async function POST(request) {

    const {email, password} = await request.json();

    try {
       await connectDb();
        //1st step is to find the user by email

    const user = await User.findOne({ email:email });


        if(user === null) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // 2nd step is to compare the password with the hashed password stored in the database

        const isPasswordValid =  bcrypt.compareSync(password, user.password);

        if(!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }

        // 3rd step is to generate a JWT token for the user 

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        console.log("Generated JWT token:", token);

        //4th step is to send the token back to the client in the response

        const response = NextResponse.json({ message: "Login successful", success: true }, { status: 200 });

       // response.cookies.set("Login token", token,  {expiresIn: '1d', httpOnly: false, secure: true, sameSite: "strict", maxAge: 3600 });


         response.cookies.set("logintoken", token, 
             {maxAge: 86400,
                 path: "/",
            // httpOnly: false 
             });



       // const verifyPassword = jwt.verify(token, 'wrong-secret', function(err, decoded) {
  // err
  // decoded undefined
//});

     console.log("USER:", user);



 return response;

       

    }catch (error) {
        return  NextResponse.json({ message: "Failed to login", error: error.message }, { status: 500 });

    }



}