import * as React from "react";
import { ColorContext, FontSizeContext } from "../pages/post/Posts";

function Header() {
  console.log("Header re-render");

  const color = React.useContext(ColorContext);

  return (
    <header>
      <HeaderTitle />
      <HeaderSearch />
      <div style={{ color }}>Header</div>
    </header>
  );
}

function HeaderTitle() {
  const fontSize = React.useContext(FontSizeContext);

  return (
    <div style={{ fontSize: fontSize.toString() + "px" }}>Header Title</div>
  );
}

function HeaderSearch() {
  // useRef：获取 dom 元素
  const inputRef = React.useRef(null);
  const handleClick = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="search" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default React.memo(Header);
