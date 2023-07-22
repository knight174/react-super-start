import { useRef, useEffect, useState } from "react";
import { PostItem } from "../../pages/post/Posts";

interface HeaderSearchProps {
  setPosts: (posts: PostItem[]) => void;
}

export default function HeaderSearch({ setPosts }: HeaderSearchProps) {
  // useRef：获取 dom 元素
  const inputRef = useRef(null);
  const [value, setValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleClick = async (value: string) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + value
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error(errorData);
      window.alert("error request");
      return; // 或者抛出错误，或者其他错误处理逻辑
    }
    if (!value.trim()) {
      const result: PostItem[] = await res.json();
      setPosts(result);
    } else {
      const result: PostItem = await res.json();
      setPosts([result]);
    }
  };

  const autoFocus = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  };

  useEffect(() => {
    autoFocus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="search"
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => handleClick(value)}>Search</button>
    </div>
  );
}
