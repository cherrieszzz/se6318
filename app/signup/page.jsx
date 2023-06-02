/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter, redirect } from "next/navigation";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const page = () => {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async () => {
    const flag = await signup(username, email, password, image);

    console.log("flag : ", flag);

    if (!flag) {
      setErr(true);
      return;
    }

    redirect("/todos");
  };

  return (
    <div className="w-full h-[30rem] flex flex-col justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          {err && <Error message={"出现了错误"} />}
          <div className="form-control">
            <label className="label">
              <span className="label-text">邮箱</span>
            </label>
            <input
              type="text"
              placeholder="请输入你的邮箱"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">用户名</span>
            </label>
            <input
              type="text"
              placeholder="请输入你的用户名"
              className="input input-bordered"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">头像url</span>
            </label>
            <input
              type="text"
              placeholder="请输入你的url"
              className="input input-bordered"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">密码</span>
            </label>
            <input
              type="password"
              placeholder="请输入你的密码"
              className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleSubmit}>
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
