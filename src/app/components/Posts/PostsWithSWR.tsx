"use client";
import LoadingPosts from "@/app/blog/loading";
import { getData } from "@/app/services/getPosts";
import Link from "next/link";
import useSWR from "swr";

const PostsWithSWR = () => {
  const { data: posts, isLoading } = useSWR("posts", getData);

  return (
    <ul className="">
      {isLoading ? (
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

export default PostsWithSWR;
