import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const POST = async (req) => {
  const { username, password, email, image } = req.json();
  console.log(req.json());
  try {
    await connectToDB();
    const newUser = new User({
      username: username,
      password: password,
      image: image,
      email: email,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    const resData = {
      username: savedUser.username,
      email: savedUser.email,
      image: savedUser.image,
      token: token,
    };
    return new Response(JSON.stringify(resData), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("注册失败", { status: 500 });
  }
};
