import { PostItem } from "./Posts";

export const Post: React.FC<{ posts: PostItem[] }> = ({ posts }) => {
  return (
    <div style={{ height: "300px", border: "1px solid red", overflow: "auto" }}>
      <ul>
        {posts ? (
          posts.map((post) => (
            <li key={post.id}>
              <h3>
                {post.title} - <b>{post.userId}</b>
              </h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>暂无数据！</p>
        )}
      </ul>
    </div>
  );
};
