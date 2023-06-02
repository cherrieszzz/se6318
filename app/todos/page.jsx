"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import TodoCard from "@/components/TodoCard";
import { useRouter, redirect } from "next/navigation";
import api from "@/utils/api";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const Page = () => {
  const { loggedUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const nameRef = useRef(null);
  const deadlineRef = useRef(null);
  const directionsRef = useRef(null);

  const router = useRouter();

  if (!loggedUser) {
    redirect("/login");
  }

  const handleAdd = async (e) => {
    setLoading(true);
    const res = await api.post("api/todos/new", {
      name: nameRef.current.value,
      deadline: deadlineRef.current.value,
      directions: directionsRef.current.value,
    });
    const newData = await res.data;
    setLoading(false);
    console.log(newData);
    setTodos([...todos, newData]);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await api.delete(`api/todos/${id}`);
      const res = await api.get("/api/todos");
      const data = await res.data;
      setLoading(false);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await api.get("/api/todos");
      if (res.status === 500 && res.status === 501) {
        setFetchError(true);
      }
      const data = await res.data;
      setLoading(false);
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl my-4">My Todos </h1>
        <h1 className="text-3xl my-4">{loading && <Loading />} </h1>
      </div>

      <a href="#my-modal-4" className="btn">
        添加
      </a>

      <div className="modal" id="my-modal-4">
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
            <a href="#" className="btn btn-primary" onClick={handleAdd}>
              Yay!
            </a>

            <a href="#" className="btn">
              取消
            </a>
          </div>
        </div>
      </div>

      {todos.length === 0
        ? " "
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
      {fetchError && <Error message={"Server error"} />}
    </div>
  );
};

export default Page;
