import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import jwt from 'jsonwebtoken';

export const POST = async (req) => {
  const data = await req.json();
  try {
    await connectToDB();
    console.log(data.email);
    const loggedUser = await User.findOne({ email: data.email }).exec();
    if (!loggedUser) {
      return new Response(JSON.stringify( { messsage: "不存在此用户" } ), { status: 501 });
    }
    const isMatch = data.password === loggedUser.password;
    if (!isMatch) {
      return new Response(JSON.stringify( { message: "请检查用户名和密码" } ), { status: 501 });
    }
    const token = jwt.sign({ userId: loggedUser._id }, process.env.JWT_KEY, { expiresIn: '24h' });
    const resData = {
        username:loggedUser.username,
        email:loggedUser.email,
        image:loggedUser.image,
        token:token,
    }
    return new Response(JSON.stringify(resData), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("server err", { status: 500 });
  }
};
