import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const DELETE =  async (req, {params}) => {
    const authorizationHeader = req.headers.get('authorization');
    if(!authorizationHeader) {
        return new Response("未登录",{status:501});
    }
    try {
        await connectToDB();
        const token = authorizationHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const userId = decoded.userId;
        await Todo.findOneAndDelete({_id:params.id, user:userId});
        return new Response("删除成功",{status:200});
    } catch (err) {
        console.log(err)
        return new Response("删除失败",{status:500});
    }
}