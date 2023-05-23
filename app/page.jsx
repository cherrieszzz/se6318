"use client";
import Image from "next/image";
import nextImage from "../public/next.svg";
import TodoCard from "@/components/TodoCard";
import Link from "next/link";

const Main = () => {
 
  return (
    <div className="max-w-lg mx-auto my-5 flex flex-col items-center min-h-[30rem] justify-center">
        <h1 className="text-5xl font-black my-6 max-w-full">Welcome to Todo!</h1>
        <button className="btn btn-primary"> <Link href='/todos'> Get Started!</Link></button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}
