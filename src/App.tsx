import { useEffect, useState } from "react";
import "./style.css";
import About from "./pages/About";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Fallback } from "./components/Fallback";

export default function App() {
  console.log("App re-render");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 副作用 hook 并没有依赖任何的状态数据，所以只会执行一次；而下面的那些依赖了某些状态，因此只要状态发生变化，hook 就会执行。
    console.log("mounted App 挂载（只一次）");
  }, []);

  // useEffect(() => {
  //   console.log('依赖数组有状态变化');
  // }, [count, visible, countRef, age, salary, price]);

  return <RouterProvider router={router} fallbackElement={<Fallback />} />;

  return (
    <div>
      {/* Content */}
      <section>
        <button onClick={() => setVisible(!visible)}>Toggle About</button>
        <div>{visible ? <About /> : null}</div>
      </section>
    </div>
  );
}
