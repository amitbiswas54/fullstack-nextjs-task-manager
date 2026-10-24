import { NextResponse } from "next/server";
import {connectDb} from "../../helper/db";
import { User } from "../../model/user/user";


connectDb();

export function GET(request) {
    const User =[{
       name: "Sneha Roy",
    email: "sneha@example.com",
    password: "sneha123",
    about: "Full Stack JavaScript Developer.",
    profileImage: "https://example.com/images/sneha.jpg",

    }

]
}

export  async function  POST(request) {

    const {name, email, password, about, profileImage } =  request.json();

    const newUser = new User({
        name,
        email,
        password,
        about,
        profileImage,
  
    });

    try {
       const createUser = await newUser.save();
       const response = NextResponse.json(createUser, { status: 201, statusText: "User  Successfully Created" });
       return response;
    } catch (error) {
        return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 5009, statusText: "Internal  Server Error" });
    }







    //const body = await request.body
    //console.log(body);
   // console.log(request.coookies);
   // console.log(request.headers);
    //console.log(request.nextUrl.pathname);
    //console.log(request.nextUrl.searchParams);

    //const textData = await request.text()
    //console.log(textData);
  

   // return NextResponse.json(
    //    { message: "Posting user Data qqqq", body:body }, 
      //  { status: 201, statusText: "Created" }
    //*html*/`
        
   //)

}