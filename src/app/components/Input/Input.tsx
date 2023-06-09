"use client";
import { useBearStore } from "@/app/store/store";
import { useState } from "react";

interface inputProps {
  placeholder: string;
}

const Input = ({ placeholder }: inputProps) => {
  const searchPosts = useBearStore((state) => state.getPostBySearch);

  const [text, setText] = useState("");

  const changeHandler = async (e) => {
    e.preventDefault();
    searchPosts(text);
  };

  return (
    <form onSubmit={changeHandler}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default Input;
