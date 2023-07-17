import React from "react";

const About: React.FC = () => {
  console.log("About re-render");

  React.useEffect(() => {
    console.log("mounted About 挂载");
    return () => {
      console.log("unmounted About 被卸载");
    };
  }, []);

  return <div style={{ border: "1px solid #000" }}>About</div>;
};

export default React.memo(About);
