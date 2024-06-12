import Heading from "./Heading";
import EducationCard from "./EducationCard";
export default function Work() {
  let styles = {
    height: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  return (
    <div id="Work">
      <Heading heading="Work" />
      <div style = {styles}>
        <a
          href="https://wanderlust-nzvo.onrender.com"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Wanderlust"
            imgSrc="/Wanderlust.png"
            body="I developed a responsive hotel booking website utilizing the MERN stack. This application offers robust authentication and authorization features to ensure secure user access. Additionally, it leverages RESTful APIs for efficient."
          />
        </a>
        <a
          href="https://wanderlust-nzvo.onrender.com"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Spotify Clone"
            imgSrc="/spotifyClone.png"
            body="I created a visually appealing Spotify clone using CSS, focusing solely on the frontend. The project features a sleek, responsive UI that replicates Spotify's core design elements."
          />
        </a>
        <a
          href="https://wanderlust-nzvo.onrender.com"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Youtube Clone"
            imgSrc="/youtubeClone.png"
            body="I crafted a visually stunning YouTube clone, focusing solely on frontend design. It replicates YouTube's interface with a clean, responsive layout for an intuitive user experience."
          />
        </a>
        <a
          href="https://wanderlust-nzvo.onrender.com"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Simon Says Game"
            imgSrc="/simonSays.png"
            body="I've developed an interactive Simon Says game using HTML, CSS, and JavaScript. It improves memory where user has to enter the same sequence as flashed."
          />
        </a>
      </div>
    </div>
  );
}
