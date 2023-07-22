import { useContext } from "react";
import { FontSizeContext } from "../../pages/post/Posts";

export default function HeaderTitle() {
  const fontSize = useContext(FontSizeContext);

  return (
    <p style={{ fontSize: fontSize.toString() + "px" }}>
      My fontSize is from FontSizeContext.
    </p>
  );
}
