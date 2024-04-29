import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await (await fetch('https://my-json-server.typicode.com/igorbill/db/posts')).json();
            setPosts(data);
        }
        fetchData();
    }, []);

  return (
    <div>
      {posts.map((post) => (
        <div className="flex flex-col gap-5 my-5">
            <h2 className="text-indigo-600 flex items-center pb-2 pr-2 uppercase text-2xl">{post.title}</h2>
            <p>{post.content}</p>
            <img className="w-40" src={post.cover} alt={post.title} />
            <span>
            like: <span>{post.likes}</span>
            </span>
      </div>
      ))}
    </div>
  );
}

export default Posts;