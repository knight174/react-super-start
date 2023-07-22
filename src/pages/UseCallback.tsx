import { useState, useCallback, useEffect } from "react";
import Button from "../components/button/Button";

export const UseCallback: React.FC = () => {
  console.log("UseCallback re-render");

  {
    /* 传给 Button 组件的 props 必须使用 useCallback 缓存，不然即使 Button 使用了 useMemo，还是会引发重新渲染！ */
  }
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(100);
  const [price, setPrice] = useState(998);

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
    console.log("age 状态变化");
  }, [age]);
  useEffect(() => {
    console.log("salary 状态变化");
  }, [salary]);
  useEffect(() => {
    console.log("price 状态变化");
  }, [price]);
  return (
    <>
      <h2>useCallback</h2>
      <p>
        传给 Button 组件的 props 必须使用 useCallback 缓存，不然即使 Button
        使用了 useMemo，还是会引发重新渲染！
      </p>
      <p>
        useCallback: 缓存函数引用（父组件的重新渲染不会导致 handleClick
        再次创建，只有依赖项 age 变化时才会重新创建。）
      </p>
      <button onClick={handleClick}>age + 1: {age}</button>
      <Button handleClick={handleClickSalary}>salary + 100</Button>
      <Button handleClick={handleClickPrice}>price + 30</Button>
      <p>salary: {salary}</p>
      <p>price: {price}</p>
    </>
  );
};
