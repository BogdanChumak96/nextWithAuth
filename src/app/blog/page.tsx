"use client";
import InputWithSWR from "../components/Input/InputWithSWR";
import PostsWithSWR from "../components/Posts/PostsWithSWR";
type Props = {};

const Blog = async (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-10 text-black">
      <div>Blog page</div>
      {/* <Input placeholder="search" /> */}
      <InputWithSWR placeholder={"search"} />
      {/* <Posts /> */}
      <PostsWithSWR />
    </div>
  );
};

export default Blog;
