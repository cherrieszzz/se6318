"use client";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
import { useRouter } from "next/navigation";
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState(sessionStorage.getItem('User'));

  const signup = async (username, email, password, image) => {
    const formData = {
      username: username,
      email: email,
      password: password,
      image: image,
    };
    try {
      const res = await axios.post("/api/auth/signup", formData);
      if (res.status === 201) {
        sessionStorage.setItem("Authorization", res.data.token);
        const sessionUser = {
          username: res.data.username,
          email: res.data.email,
          image: res.data.image,
        };
        sessionStorage.setItem('User',JSON.stringify(sessionUser));
        router.push('/todos');
      }
      if (res.status === 500 && 501) {
        return;
      }
    } catch (err) {
      return "server err";
    }
  };

  const signin = async (email, password) => {
    const formData = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post("/api/auth/signin", formData);
      if (res.status == 501 && 500) {
        return;
      }
      if (res.status === 200) {
        sessionStorage.setItem("Authorization", res.data.token);
        const sessionUser = {
          username: res.data.username,
          email: res.data.email,
          image: res.data.image,
        };
        sessionStorage.setItem('User',JSON.stringify(sessionUser));
      }
    } catch {
      return "server err";
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setLoggedUser();
    router.push('/');
  };

  useEffect(() => {
    setLoggedUser(sessionStorage.getItem('User'));
  },[])

  return (
    <AuthContext.Provider value={{ loggedUser, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
