import { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopNavHome from "./TopNavSearch";

const Homepage = (props) => {
  const [y, setY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="big-cont-home">
      <TopNavHome y={y} setY={setY} />
    </div>
  );
};

export default connect()(Homepage);
