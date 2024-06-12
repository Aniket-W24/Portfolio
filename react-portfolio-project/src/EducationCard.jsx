import "./EducationCard.css"
export default function EducationCard({title, body, imgSrc}){
    return (
        <div>
            <div className="EducationCard">
                <img src={imgSrc}></img>
                <h3 className="Card-title">{title}</h3>
                <p className="Card-body">{body}</p>
            </div>
        </div>
    )
}