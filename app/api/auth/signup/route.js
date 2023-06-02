import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const POST = async (req) => {
  await connectToDB();
  const data = await req.json();
  try {
    console.log(data.email);
    await connectToDB();
    const repeatUser = await User.findOne({ email:data.email }).exec();
    if (repeatUser) {
      return new Response(JSON.stringify({ message: "此邮箱已被注册" }), {
        status: 501,
      });
    }
    const newUser = new User({
      username: data.username,
      password: data.password,
      image: data.image,
      email: data.email,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_KEY, {
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
