import React, { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter, redirect } from "next/navigation";
import { Bounce } from 'react-loading';
import Error from "./Error";
import Link from "next/link";
import Loading from "./Loading";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const { signin, loggedUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const flag = await signin(username, password);
    setLoading(false);
    if (!flag) {
      setErr(true);
      return;
    }
    router.push('/todos');
  };

  if (loggedUser) {
    redirect("/todos");
  }

  return (
    <div className="mx-auto py-3 flex justify-center">
      <form action="" onSubmit={handleSubmit}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-full">
              <div className="card-body">
              {err && <Error message={'请检查你的用户名和密码'} /> }
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">邮箱</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">密码</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <Link
                      href="/signup"
                      className="label-text-alt link link-hover"
                    >
                      注册
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                  {loading ? <Loading /> : '登录'} 
                  </button>
                </div>
              </div>
            </div>
         
      </form>
    </div>
  );
};

export default LoginForm;
