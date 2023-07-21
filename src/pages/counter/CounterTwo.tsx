import useCount from "../../hooks/useCount";

const CounterTwo = () => {
  // custom hook
  const [count, doubleCount, increase, decrease, reset] = useCount(10, 2);

  return (
    <div>
      <button onClick={increase}>+count</button>
      <button onClick={decrease}>-count</button>
      <button onClick={reset}>reset count</button>

      <p>count: {count}</p>
      <p>doubleCount: {doubleCount}</p>
    </div>
  );
};

export { CounterTwo };
