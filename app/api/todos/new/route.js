import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const POST =  async (req) => {
    await connectToDB();
    const authorizationHeader = req.headers.get('authorization');
    const todo = await req.json();
    if(!authorizationHeader) {
        return new Response("未登录",{status:501});
    }
    try {
        await connectToDB();
        const token = authorizationHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const userId = decoded.userId;
        const newTodo = new Todo({
            name:todo.name,
            user:new mongoose.Types.ObjectId(userId),
            deadline:todo.deadline,
            directions:todo.directions
        })
        const saveTodo = await newTodo.save();
        return new Response(JSON.stringify(saveTodo), {status:200});
    } catch (err) {
        console.log(err)
        return new Response("添加失败",{status:500});
    }
}