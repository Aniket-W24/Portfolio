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
      <div style={styles}>
        <a
          href="https://aniket-wanderlust.vercel.app/"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Wanderlust"
            imgSrc="Wanderlust.png"
            body="A responsive hotel booking website built using the MERN stack, featuring secure authentication and authorization for user access. It utilizes RESTful APIs to deliver efficient and seamless functionality."
            buttons={true}
            buttonLink1="https://github.com/Aniket-W24/WanderLust"
          />
        </a>
        <a
          href="https://stocksage-frontend.vercel.app"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="StockSage"
            imgSrc="StockSage.png"
            body="Stock Sage is a MERN stack-based stock market platform featuring an intuitive dashboard and real-time insights for efficient trading decisions."
            buttons={true}
            buttonLink1="https://github.com/Aniket-W24/StockSage"
          />
        </a>
        <a
          href="https://spotify-clone-pi-brown.vercel.app"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Spotify Clone"
            imgSrc="spotifyClone.png"
            body="A stylish Spotify clone developed with CSS, emphasizing frontend design. The project showcases a modern, responsive interface that mimics Spotify's key design features."
            buttons={true}
            buttonLink1="https://github.com/Aniket-W24/Spotify_Clone"
          />
        </a>
        <a
          href="https://youtube-clone-omega-lemon.vercel.app"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Youtube Clone"
            imgSrc="youtubeClone.png"
            body="A visually appealing YouTube clone focusing on frontend design, replicating YouTube's interface with a clean, responsive layout for an intuitive user experience."
            buttons={true}
            buttonLink1="https://github.com/Aniket-W24/Youtube_Clone"
          />
        </a>
        <a
          href="https://simon-says-fawn-psi.vercel.app"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <EducationCard
            title="Simon Says Game"
            imgSrc="simonSays.png"
            body="An interactive Simon Says game built with HTML, CSS, and JavaScript, designed to enhance memory by having users replicate a sequence of flashes."
            buttons={true}
            buttonLink1="https://github.com/Aniket-W24/Simon_Says"
          />
        </a>
      </div>
    </div>
  );
}
