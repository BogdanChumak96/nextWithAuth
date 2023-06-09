export async function getData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return data.json();
}
export async function getDataBySearch(search: string) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`,
    { cache: "force-cache" }
  );
  return data.json();
}
