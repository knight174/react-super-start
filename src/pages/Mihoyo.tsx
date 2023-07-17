import { FC, memo, useEffect, useState } from "react";
import Loading from "../components/Loading";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Mihoyo: FC = () => {
  console.log("Mihoyo re-render");
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      if (!res.ok) {
        return "fuck";
      }
      setLoading(false);
      const posts = (await res.json()) as Post[];
      setPosts(posts);
    };
    fetchData().catch((err: { message: string }) => {
      console.log(err.message);
      setLoading(false);
    });
  }, []);

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         border: "1px solid red",
  //         height: "200px",
  //         overflow: "auto",
  //       }}
  //     >
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div style={{ border: "1px solid red", height: "200px", overflow: "auto" }}>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              <h3>
                第 {index + 1} 篇 - {post.title} - by user {post.userId}
              </h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Mihoyo);
