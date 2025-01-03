import "./EducationCard.css";
export default function EducationCard({
  title,
  body,
  imgSrc,
  buttons,
  buttonLink1,
}) {
  return (
    <div>
      <div className="EducationCard">
        <img src={imgSrc}></img>
        <h3 className="Card-title">{title}</h3>
        <p className="Card-body">{body}</p>
        {buttons ? (
          <div style={{textAlign: "center", position: "absolute", bottom:"0.75rem", left:"50%"}}>
            <a
              href={buttonLink1}
              style={{ textDecoration: "none"}}
              target="_blank"
            >
              <i className="fa-brands fa-github fa-2x" style={{color: "white"}}></i>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
