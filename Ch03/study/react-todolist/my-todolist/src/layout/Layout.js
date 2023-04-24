import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children, tabId }) => {
  const routes = [
    { id: 0, path: "/", label: "메인" },
    { id: 1, path: "/sub", label: "서브" },
    { id: 2, path: "/todo", label: "todo"},
  ];
  return (
    <>
      <header>
        {routes.map((route) => {
          return (
            <>
              <Link to={route.path}>
                <span style={{
                    padding: "10px",
                    backgroundColor : route.id === tabId ? "green" : ""
            }}>{route.label}</span>
              </Link>
            </>
          );
        })}
      </header>
      <contents>{children}</contents>
    </>
  );
};

export default Layout;
