import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const GET = async (req) => {
  const authorizationHeader = req.headers.get("authorization");
  if (!authorizationHeader) {
    return new Response(JSON.stringify({ message: "你还未登录" }), {
      status: 501,
    });
  }
  const token = authorizationHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.userId;
    const todos = await Todo.find({ user: id }).exec();
    return new Response(JSON.stringify(todos), {
      status: 200,
    });
    // await connectToDB();

    // const Todos = await Todo.find({});
    // return new Response(JSON.stringify(Todos), { status: 200 });
  } catch (err) {
    return new Response("server err", { status: 500 });
  }
};
