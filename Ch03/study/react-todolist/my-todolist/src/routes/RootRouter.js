import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SubPage from "../pages/SubPage";
import TodoList from "../pages/TodoList";
import SubDetailPage from "../pages/SubDetailPage";

const RootRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sub" element={<SubPage />}>
            <Route path=":id" element={<SubDetailPage />} />
          </Route>
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RootRouter;
