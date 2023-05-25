"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import TodoCard from "@/components/TodoCard";
import { Session } from "next-auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "@/utils/api";

const Page = () => {
  const {loggedUser} = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const nameRef = useRef(null);
  const deadlineRef = useRef(null);
  const directionsRef = useRef(null);

  const router = useRouter();

  if(!loggedUser) {
    router.push('/login');
  }

  const handleAdd = async (e) => {
    const res = await api.post("api/todos/new", {
      name: nameRef.current.value,
      deadline: deadlineRef.current.value,
      directions: directionsRef.current.value,
    });
    const newData = await res.data;
    console.log(newData);
    setTodos([...todos, newData]);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`api/todos/${id}`);
      const res = await api.get("/api/todos");
      const data = await res.data;
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/api/todos");
      const data = await res.data;
      setTodos(data);
    };
    fetchData();
    console.log("useEffect被调用");
  }, []);

 

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl my-4">My Todos</h1>

      <a href="#my-modal-2" className="btn">
        添加
      </a>

      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">添加新的代办事项!</h3>

          <p className="py-4">
            <input
              type="text"
              placeholder="名称"
              ref={nameRef}
              className="input input-bordered w-full max-w-xs my-4"
            />
            <input
              type="text"
              placeholder="截止时间"
              ref={deadlineRef}
              className="input input-bordered w-full max-w-xs my-4"
            />
            <input
              type="text"
              placeholder="备注"
              ref={directionsRef}
              className="input input-bordered w-full max-w-xs my-4"
            />
          </p>
          <div className="modal-action">
            <a href="#" className="btn" onClick={handleAdd}>
              Yay!
            </a>
          </div>
        </div>
      </div>

      {todos.length === 0
        ? "loading"
        : todos?.map((todo) => {
            return (
              <div key={todo._id}>
                <TodoCard
                  id={todo._id}
                  name={todo.name}
                  deadline={todo.deadline}
                  directions={todo.directions}
                  handleClick={() => handleDelete(todo._id)}
                />
              </div>
            );
          })}
    </div>
  );
};

export default Page;
