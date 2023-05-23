"use client";
import React, { useEffect, useState } from "react";
import TodoCard from "@/components/TodoCard";

const Page = () => {
  const [data, setData] = useState([]);
  
  const fetchTodos = async () => {
      const res = await fetch('api/todos');
      const data = await res.json();
      setData(data);
      console.log(data);
  }

  useEffect(() => {
    fetchTodos();
  },[])

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl my-4">My Todos</h1>
      <div className="w-full space-x-5 my-5 flex justify-between">
        <input
          type="text"
          placeholder="请输入你的待办事项"
          className="input input-bordered  w-4/5"
        />
        <button className="btn btn-primary">添加</button>
      </div>

      {data.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoCard
              id={todo.id}
              name={todo.name}
              deadline={todo.deadline}
              directions={todo.directions}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
