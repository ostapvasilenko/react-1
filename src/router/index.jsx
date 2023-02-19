import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import StudentPage from "../pages/student";
import Reactproject from "../pages/reactproject";
import SinglePostPage from "../pages/SinglePostPage";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/student" element={<StudentPage />}></Route>
      <Route path="/reactproject" element={<Reactproject />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route path="/" element={<Reactproject />}></Route>
    </Routes>
  );
};

export default RouterApp;
