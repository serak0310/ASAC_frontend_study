import React from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";

const SubDetailPage = () => {
  
  const param = useParams();

  return (
      <div>SubDetailPage
        param{param.id}
      </div>
  );
};

export default SubDetailPage;
