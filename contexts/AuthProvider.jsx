"use client";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
import { useRouter, redirect } from "next/navigation";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState(null);
  const [changeTheme, setChangeTheme] = useState(false);

  const changeThemeFun = () => {
    setChangeTheme(!changeTheme);
  };

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
        sessionStorage.setItem("User", JSON.stringify(sessionUser));
        setLoggedUser(JSON.parse(sessionStorage.getItem("User")));
        return true;
      }
      if (res.status === 500 && 501) {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
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
        return false;
      }
      if (res.status === 200) {
        sessionStorage.setItem("Authorization", res.data.token);
        const sessionUser = {
          username: res.data.username,
          email: res.data.email,
          image: res.data.image,
        };
        sessionStorage.setItem("User", JSON.stringify(sessionUser));
        setLoggedUser(JSON.parse(sessionStorage.getItem("User")));
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setLoggedUser(null);
    redirect("/");
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(sessionStorage.getItem("User")));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        changeTheme,
        signin,
        signup,
        logout,
        changeThemeFun,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
