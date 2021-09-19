import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { BsShuffle } from "react-icons/bs";
import { IoIosRepeat} from "react-icons/io";
import {HiPause} from "react-icons/hi"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle} from "react-icons/ai";
import { useState } from "react";

const mapStateToProps = (state) => ({
  selectedSong: state.currentSong.data,
});

const Player = (props) => {
  const [isPlay, setIsPlay] = useState(false);

  console.log(props.selectedSong)
  return (
    <div className="big-cont-player">
      <Row>
        <Col xs={3}>
          {props.selectedSong && (
            <div className="player-song-cont">HELLO</div>
          )}
        </Col>
        <Col xs={6}>
          <div className="player-buttons pt-2 pb-1">
            <BsShuffle
              style={{ fontSize: "1rem" }}
              className="mx-2 single-btn"
            />
            <BiSkipPrevious
              style={{ fontSize: "1.5rem" }}
              className="mx-2 single-btn"
            />
            <div className="play-cont" onClick={() => setIsPlay(!isPlay)}>
              {isPlay ? (
                <HiPause className="single-btn-pause" />
              ) : (
                <AiFillPlayCircle className="single-btn-play" />
              )}
            </div>
            <BiSkipNext
              style={{ fontSize: "1.5rem" }}
              className="mx-2 single-btn"
            />
            <IoIosRepeat
              style={{ fontSize: "1.4rem" }}
              className="mx-2 single-btn"
            />
          </div>
          <div className="player-bar pb-3">
              <span id="current-time">0:00</span>
              <input type="range" id="slider-bar"/>
              <span id="total-time">0:00</span>
          </div>
        </Col>
        <Col xs={3}>
          {props.selectedSong && (
            <div className="player-volume-cont">HELLO</div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(Player);
