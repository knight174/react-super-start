import * as React from "react";
import { ColorContext, FontSizeContext } from "../pages/post/Posts";

function Header() {
  console.log("Header re-render");

  const color = React.useContext(ColorContext);

  return (
    <header>
      <HeaderTitle />
      <p style={{ color }}>My color is from ColorContext.</p>
      <HeaderSearch />
    </header>
  );
}

function HeaderTitle() {
  const fontSize = React.useContext(FontSizeContext);

  return (
    <p style={{ fontSize: fontSize.toString() + "px" }}>
      My fontSize is from FontSizeContext.
    </p>
  );
}

function HeaderSearch() {
  // useRef：获取 dom 元素
  const inputRef = React.useRef(null);

  const handleClick = () => {
    console.log("ccc");
  };

  const autoFocus = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  };

  React.useEffect(() => {
    autoFocus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="search" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default React.memo(Header);
