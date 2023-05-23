"use client";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import TodoCard from "@/components/TodoCard";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddTodoBtn = () => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [direction, setDirection] = useState("");
  const router = useRouter();

  const handleAdd = () => {
    const formData = {
      name: name,
      deadline: deadline,
      directions: direction,
    };

    const sessionToken = sessionStorage.getItem("Authorization");

    // 设置请求头
    const headers = {
      Authorization: `Bearer ${sessionToken}`,
    };

    axios
      .post(`/api/todos/new`, formData, { headers })
      .then((response) => {
        // 请求成功处理逻辑
        console.log(response.data);
        router.push('/todos')
      })
      .catch((error) => {
        // 请求失败处理逻辑
        console.error(error);
      });
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn">
        添加
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">加入待办事项</h3>
          <div className="form-control">
            <label className="input-group input-group-sm my-3">
              <span>待办名称</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="input-group input-group-sm my-3">
              <span>截止日期</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm "
                onChange={(e) => setDeadline(e.target.value)}
              />
            </label>

            <label className="input-group input-group-sm my-3">
              <span>备注</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm"
                onChange={(e) => setDirection(e.target.value)}
              />
            </label>
          </div>
          <div className="flex w-full flex-row-reverse">
            <button className="btn btn-secondary" onClick={handleAdd}>
              完成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [data, setData] = useState();
  const loggedUser = JSON.parse( sessionStorage.getItem('User') );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = (id) => {
    const sessionToken = sessionStorage.getItem("Authorization");

    // 设置请求头
    const headers = {
      Authorization: `Bearer ${sessionToken}`,
    };

    // 发送 GET 请求
    axios
      .delete(`/api/todos/${id}`, { headers })
      .then((response) => {
        // 请求成功处理逻辑
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        // 请求失败处理逻辑
        console.error(error);
      });
  };

  const fetchTodos = async () => {
    const sessionToken = sessionStorage.getItem("Authorization");

    // 设置请求头
    const headers = {
      Authorization: `Bearer ${sessionToken}`,
    };
    setLoading(true);
    // 发送 GET 请求
    axios
      .get("/api/todos", { headers })
      .then((response) => {
        // 请求成功处理逻辑
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // 请求失败处理逻辑
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!loggedUser) {
    router.push('/login')
  }

  if(loading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  console.log(data);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl my-4">My Todos</h1>
      <div className="w-full space-x-5 my-5 flex justify-between">
        <input
          type="text"
          placeholder="请输入你的待办事项"
          className="input input-bordered  w-4/5"
        />
        <AddTodoBtn />
      </div>
      
      { data  &&
        data.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoCard
                id={todo.id}
                name={todo.name}
                deadline={todo.deadline}
                directions={todo.directions}
                handleClick={(e) => handleClick(e)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Page;
