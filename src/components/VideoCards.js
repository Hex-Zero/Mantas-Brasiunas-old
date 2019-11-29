import React, { useState } from "react";
import Loading from "../Loading";
import { FaGithub, FaGlobe } from "react-icons/fa";
import ravenouse from "../assets/ravenouse.jpg";
import first from "../assets/first.gif";
import vita from "../assets/vita.gif";
import makeup from "../assets/makeup.jpg";
const VideoCards = React.memo(({ url, title, content, git, web }) => {
  const [imageUrl] = useState([makeup, vita, ravenouse, first]);
  const [slide, setSlide] = useState("");
  return (
    <div className={`videoCards`}>
      <div
        className="card"
        onMouseEnter={() => setSlide("slide-in")}
        onMouseLeave={() => setSlide("slide-out")}
      >
        <img className="projectImage" src={imageUrl[url]} alt={title} />
        <Loading />
        <div className={`${slide} projectSlides`}>
          <h1 className="title">{title}</h1>
          <h2 className="content">{content}</h2>
          <div className="bottom-Line">
            <div className="tagWrapper">
              <a
                className="web tags"
                href={web}
                target="__blank"
                alt="website link"
              >
                <FaGlobe />
                <p> Site</p>
              </a>
              <a
                className="git tags"
                href={git}
                target="__blank"
                alt="github link"
              >
                <FaGithub />
                <p> Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default VideoCards;
