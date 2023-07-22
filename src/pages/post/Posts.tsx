import { createContext, useEffect, useState } from "react";
import { Post } from "./Post";
import Loading from "../../components/Loading";
import Header from "../../components/Header";

// 父节点将数据往下面派发
export const ColorContext = createContext("");
export const FontSizeContext = createContext(20);

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
      <ColorContext.Provider value={"blue"}>
        <FontSizeContext.Provider value={20}>
          <Header />
        </FontSizeContext.Provider>
      </ColorContext.Provider>
      {isLoading ? <Loading /> : <Post posts={posts} />}
    </div>
  );
};
