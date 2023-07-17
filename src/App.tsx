import { createContext, useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import Header from "./components/Header";
import About from "./pages/About";
import Button from "./components/button/Button";
import { CounterOne } from "./pages/CounterOne";
import { CounterTwo } from "./pages/CounterTwo";
import Mihoyo from "./pages/Mihoyo";

// 父节点将数据往下面派发
export const ColorContext = createContext("");
export const FontSizeContext = createContext(20);

export default function App() {
  console.log("App re-render");

  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(100);
  const [price, setPrice] = useState(998);
  const [visible, setVisible] = useState(true);
  // useRef: 不会触发组件的重新渲染
  const countRef = useRef(0) as { current: number };

  // useCallback: 缓存函数引用（父组件的重新渲染不会导致 handleClick 再次创建，只有依赖项 age 变化时才会重新创建。）
  const handleClick = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleClickSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);
  const handleClickPrice = useCallback(() => {
    setPrice(price + 30);
  }, [price]);

  useEffect(() => {
    // 副作用 hook 并没有依赖任何的状态数据，所以只会执行一次；而下面的那些依赖了某些状态，因此只要状态发生变化，hook 就会执行。
    console.log("mounted App 挂载（只一次）");
  }, []);

  useEffect(() => {
    console.log("age 状态变化");
  }, [age]);
  useEffect(() => {
    console.log("salary 状态变化");
  }, [salary]);
  useEffect(() => {
    console.log("price 状态变化");
  }, [price]);

  // useEffect(() => {
  //   console.log('依赖数组有状态变化');
  // }, [count, visible, countRef, age, salary, price]);

  return (
    <div>
      {/* Header */}
      <ColorContext.Provider value={"blue"}>
        <FontSizeContext.Provider value={20}>
          <Header />
        </FontSizeContext.Provider>
      </ColorContext.Provider>

      <br />

      <section>
        <h2>JSON Placeholder (Test Ajax 👇)</h2>
        <Mihoyo />
      </section>

      <br />

      {/* Content */}
      <section>
        <h3>Counter One</h3>
        <CounterOne />

        <h3>Counter Two</h3>
        <CounterTwo />

        <button onClick={() => setVisible(!visible)}>Toggle About</button>
        <button
          onClick={() => {
            countRef.current++;
            console.log("countRef.current++", countRef.current);
          }}
        >
          countRef +1
        </button>

        <p>countRef(not re-render): {countRef.current}</p>

        <div>{visible ? <About /> : null}</div>
      </section>

      <br />

      {/* useCallback */}
      {/* 传给 Button 组件的 props 必须使用 useCallback 缓存，不然即使 Button 使用了 useMemo，还是会引发重新渲染！ */}
      <section>
        <h2>test useCallback 👇</h2>
        <button onClick={handleClick}>age + 1: {age}</button>
        <Button handleClick={handleClickSalary}>salary + 100</Button>
        <Button handleClick={handleClickPrice}>price + 30</Button>
        <p>salary: {salary}</p>
        <p>price: {price}</p>
      </section>
    </div>
  );
}
