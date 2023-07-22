import { CounterOne } from "./CounterOne";
import { CounterTwo } from "./CounterTwo";

export const Counter: React.FC = () => {
  console.log("Counter re-render");

  return (
    <>
      <h2>Counters</h2>
      <h3>useCount 是自定义 hook，useMemo 用来缓存状态。</h3>
      <CounterOne />
      <CounterTwo />
    </>
  );
};
