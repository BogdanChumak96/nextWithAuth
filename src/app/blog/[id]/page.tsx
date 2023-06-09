import React from "react";

interface Props {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
    next: {
      revalidate: 60,
    },
  });
  return data.json();
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

const Blog = async ({ params: { id } }: Props) => {
  const post = await getData(id);

  return (
    <div className="flex min-h-screen flex-col items-center">
      Blog {id}
      <span>{post.title}</span>
      <span>{post.body}</span>
    </div>
  );
};

export default Blog;
