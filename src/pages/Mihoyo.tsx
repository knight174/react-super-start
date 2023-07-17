import { FC, memo, useEffect, useState } from "react";

const Mihoyo: FC = () => {
  console.log("Mihoyo re-render");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bbs-api.mihoyo.com/apihub/api/home/new?gids=2"
      );
      const data = await res.json();
      console.log(1, res);
    };
    fetchData().catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <div
      style={{ border: "1px solid red", minHeight: "200px", overflow: "auto" }}
    >
      <p>{loading.toString()}</p>
      mihoyo
    </div>
  );
};

export default memo(Mihoyo);
