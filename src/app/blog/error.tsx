"use client";
import React from "react";

const ErrorBlog = ({ error }: { error: Error }) => {
  return <div>ErrorBlog {error.message}</div>;
};

export default ErrorBlog;
