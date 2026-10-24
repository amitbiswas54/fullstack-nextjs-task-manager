import mongoose from "mongoose";
import { User } from "../model/user/user.js";

 
export const connectDb = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
         dbName: "work_manager",
        });

        console.log("Amit MongoDB connected:");

        console.log("Amit Connected with host:", connection.host);
    //    console.log(connection); 

//       const  userdetails =  new User({
//            name: "Priya Sharma ameewio",
//             email: "priya@example.com", 
//             password: "priya123amit",
//             about: "Frontend Developer and UI Designer.",
//             profileImage: "https://example.com/images/priya.jpg",
     
//         }
//        )
//        await userdetails.save()
 
// console.log("User created successfully wwww:", userdetails);

    } catch (error) {
        console.log("Error connecting to the database:", error);
    }

}