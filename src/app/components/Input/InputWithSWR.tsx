"use client";
import { getDataBySearch } from "@/app/services/getPosts";
import React, { useState } from "react";
import useSWR from "swr";

interface inputProps {
  placeholder: string;
}

const InputWithSWR = ({ placeholder }: inputProps) => {
  const { mutate } = useSWR("posts");
  const [text, setText] = useState("");

  const changeHandler = async (e) => {
    e.preventDefault();
    const posts = await getDataBySearch(text);
    mutate(posts);
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

export default InputWithSWR;
