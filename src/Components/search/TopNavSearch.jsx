import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopNavSearch = (props) => {
  const [color, setColor] = useState("transparent");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 90) {
      setColor("#070707");
    }else{
        setColor("transparent")
    }
  };

  useEffect(() => {
    listenScrollEvent();;
  }, [props.y]);

  return (
    <div className="top-nav-cont" style={{ backgroundColor: color, transition: "background-color 0.5s" }}>
      <div id="arrows-top-nav">
        <div className="circle-top-nav active">
          <IoIosArrowBack />
        </div>
        <div className="circle-top-nav">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default TopNavSearch;
