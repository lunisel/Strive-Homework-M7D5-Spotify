import { withRouter, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";

const NavBar = (props) => {
  return (
    <div className="big-nav-container p-1 pt-4">
      <div className="nav-cont-logo px-4 mb-4">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spotify-logo"
          className="img-fluid"
        />
      </div>

      <div
        className={
          props.location.pathname === "/"
            ? "nav-cont-links pl-4 py-1 active"
            : "nav-cont-links pl-4 py-1"
        }
      >
        <Link to="/">
          <AiFillHome style={{ fontSize: "1.5rem" }} className="mr-3" />
          Home
        </Link>
      </div>
      <div
        className={
          props.location.pathname === "/search"
            ? "nav-cont-links pl-4 py-1 active"
            : "nav-cont-links pl-4 py-1"
        }
      >
        <Link to="/search">
          <FiSearch style={{ fontSize: "1.5rem" }} className="mr-3" />
          Search
        </Link>
      </div>
      <div
        className={
          props.location.pathname === "/collection"
            ? "nav-cont-links pl-4 py-1 active mb-4"
            : "nav-cont-links pl-4 py-1 mb-4"
        }
      >
        <Link to="/collection">
          <VscLibrary style={{ fontSize: "1.5rem" }} className="mr-3" />
          Your library
        </Link>
      </div>
      <div className="nav-cont-links pl-4 py-1">
        <BsPlusSquareFill style={{ fontSize: "1.5rem" }} className="mr-3" />
        Create Playlist
      </div>
      <div
        className={
          props.location.pathname === "/liked"
            ? "nav-cont-links pl-4 py-1 active"
            : "nav-cont-links pl-4 py-1"
        }
      >
        <img
          src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
          alt="liked-logo"
          className="img-fluid mr-3"
          style={{ width: "1.5rem", height: "1.5rem"}}
        />
        Liked Songs
      </div>
      <div style={{height: "0.1px", backgroundColor: "#b3b3b3"}} className="mx-3 my-3"></div>
      <div
        className={
          props.location.pathname === "/playlist/:name"
            ? "nav-cont-links pl-4 py-1 active"
            : "nav-cont-links pl-4 py-1"
        }
      ></div>
    </div>
  );
};

export default withRouter(NavBar);
