import { useEffect, useState } from "react";
import { Post } from "./Post";
import Loading from "../../components/Loading";

export interface PostItem {
  id: string;
  userId: string;
  title: string;
  body: string;
  description?: string;
}

export const Posts: React.FC = () => {
  console.log("Posts re-render");

  const [posts, setPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState<true | false>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = (await res.json()) as PostItem[];
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <p>设定 Loading 加载组件, 在 useEffect 中 fetch data。</p>
      {isLoading ? <Loading /> : <Post posts={posts} />}
    </div>
  );
};
