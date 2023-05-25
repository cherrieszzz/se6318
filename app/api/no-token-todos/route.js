import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import dotenv from "dotenv";

dotenv.config();

export const GET = async (req) => {

  try {
    await connectToDB();
    const todos = await Todo.find({}).exec();
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
