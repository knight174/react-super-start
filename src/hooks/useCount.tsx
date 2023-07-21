import * as React from "react";
import { useCountType } from "./types";

const useCount: useCountType = (initialValue = 0, step = 1) => {
  const [count, setCount] = React.useState(initialValue);
  // useMemo: 缓存状态引用（计算属性）
  const doubleCount = React.useMemo(() => count * 2, [count]);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  React.useEffect(() => {
    console.log("count 状态变化");
    document.title = count.toString();
  }, [count]);

  return [count, doubleCount, increase, decrease, reset];
};

export default useCount;
