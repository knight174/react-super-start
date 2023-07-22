import { useContext, memo } from "react";
import { ColorContext } from "../../pages/post/Posts";
import HeaderSearch from "./HeaderSearch";
import HeaderTitle from "./HeaderTitle";

interface HeaderProps {
  setPosts: () => void;
}

function Header({ setPosts }: HeaderProps) {
  console.log("Header re-render");

  const color = useContext(ColorContext);

  return (
    <header>
      <HeaderTitle />
      <p style={{ color }}>My color is from ColorContext.</p>
      <HeaderSearch setPosts={setPosts} />
    </header>
  );
}

const HeaderComponent = memo(Header);
export default HeaderComponent;
