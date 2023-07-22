import { useRef } from "react";

export const UseRef: React.FC = () => {
  console.log("UseRef re-render");

  // useRef: 不会触发组件的重新渲染
  const countRef = useRef(0) as { current: number };

  return (
    <>
      <h3>useRef</h3>
      <p>useRef 的值不会触发组件的重新渲染。</p>
      <p>
        打开控制台，点击 button 可以看到 countRef.current
        是在变化的，但是组件并未重新渲染。
      </p>
      <button
        onClick={() => {
          countRef.current++;
          console.log("countRef.current++", countRef.current);
        }}
      >
        countRef +1
      </button>

      <p>countRef(not re-render): {countRef.current}</p>
    </>
  );
};
