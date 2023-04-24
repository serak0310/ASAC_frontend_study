import React from "react";
import Layout from "../layout/Layout";
import { Outlet } from "react-router-dom";

const SubPage = () => {
  return (
    <>
      <Layout tabId={1}>
        <div>SubPage</div>
        <Outlet />
      </Layout>
    </>
  );
};

export default SubPage;
