import React from "react";
import "./style.css";

const LoadingPosts = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingPosts;
