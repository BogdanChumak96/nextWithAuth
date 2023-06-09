"use client";
import LoadingPosts from "@/app/blog/loading";
import { useBearStore } from "@/app/store/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Posts = () => {
  const posts = useBearStore((state: { posts: any }) => state.posts, shallow);
  const getAll = useBearStore((state) => state.getAllPosts);
  const loading = useBearStore((state) => state.loading);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <ul className="">
      {loading ? (
        <LoadingPosts />
      ) : (
        posts.map((post: any) => (
          <li className="mb-2" key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Posts;
