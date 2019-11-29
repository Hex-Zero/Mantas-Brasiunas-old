import React from "react";
import VideoCards from "./VideoCards";
import About from "../assets/About";
import uuid from "uuid";
const Projects = () => {
  const [cardInfo] = React.useState([
    {
      url: 0,
      title: "Makeup Islang",
      content: "Makeup Store. Best Products For Affordable Prices. ",
      git: "https://github.com/Hex-Zero/Makeup-Island",
      web: "https://makeupisland.netlify.com"
    },
    {
      url: 1,
      title: "Vita Smile Photograpy",
      content: "Landing page for a local family run photograpy business",
      git: "https://github.com/Hex-Zero/VitaSmilePhotography",
      web: "https://vita-smile-photography.uk/"
    },
    {
      url: 2,
      title: "Ravenouse",
      content: "Practise reciving JSON data from Yelp API",
      git: "https://github.com/Hex-Zero/React-Codecademy",
      web: "https://hex-zero.github.io/React-Codecademy/"
    },
    {
      url: 3,
      title: "My First Website",
      content: "My first steps in JavaScript, Made a classic memory game",
      git: "https://github.com/Hex-Zero/xFirst",
      web: "https://hex-zero.github.io/xFirst/main.html"
    }
  ]);

  return (
    <div className="projects">
      <h1 className="projectTitle ">
        My Projects <p>click a project below for more info</p>
      </h1>
      <div className="fbox">
        {cardInfo.map(({ classDummy, url, title, content, git, web }) => (
          <VideoCards
            classDummy={classDummy}
            key={uuid()}
            url={url}
            title={title}
            content={content}
            git={git}
            web={web}
          />
        ))}
        <About />
      </div>
    </div>
  );
};
export default Projects;
