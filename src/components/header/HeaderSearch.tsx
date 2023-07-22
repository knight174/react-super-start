import { useRef, useEffect } from "react";

export default function HeaderSearch() {
  // useRef：获取 dom 元素
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("ccc");
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
      <input ref={inputRef} type="text" placeholder="search" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
