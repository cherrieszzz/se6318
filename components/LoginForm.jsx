import React, { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {signin} = useContext(AuthContext);
  const loggedUser = JSON.parse( sessionStorage.getItem('User') );

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(username, password);
  }

  if(loggedUser) {
    router.push('/todos');
  }

  return (
    <div className="rounded-lg p-3 flex justify-center shadow-lg">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black">登录</h1>
        <div className="w-full">
          <label className="label">
            <span className="label-text">用户名</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">密码</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-row-reverse">
          <button type="submit" className="btn btn-primary mt-5">
            登录
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
