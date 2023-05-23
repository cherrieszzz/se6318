import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();

    const Todos = await Todo.find({});
    return new Response(JSON.stringify(Todos), { status: 200 });
  } catch (err) {
    return new Response("server err", {status:500});
  }
};
