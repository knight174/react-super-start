import { useContext, memo } from "react";
import { ColorContext } from "../../pages/post/Posts";
import HeaderSearch from "./HeaderSearch";
import HeaderTitle from "./HeaderTitle";

function Header() {
  console.log("Header re-render");

  const color = useContext(ColorContext);

  return (
    <header>
      <HeaderTitle />
      <p style={{ color }}>My color is from ColorContext.</p>
      <HeaderSearch />
    </header>
  );
}

const HeaderComponent = memo(Header);
export default HeaderComponent;
