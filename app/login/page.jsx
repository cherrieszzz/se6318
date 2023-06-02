"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
