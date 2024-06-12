import "./Education.css"
import EducationCard from "./EducationCard"
import Heading from "./Heading.jsx";
export default function Education(){
    return (
        <div id="Education">
            <Heading heading="Educational Qualifications"/>
        <div className="Education">
            
        <EducationCard title = "10th  (2019)" imgSrc = "/studyImg.jpg" body="I successfully completed my 10th grade with a remarkable achievement of securing 89.8%."/>
        <EducationCard title = "12th  (2021)" imgSrc = "/studyImg.jpg" body="I have successfully completed my 12th grade with a focus on Non-Medical Science, achieving an outstanding score of 90.4%."/>
        <EducationCard title = "BSC(H) Computer Science  (2024)" imgSrc = "/graduation.jpg" body="I graduated with honors in Computer Science from Delhi University, achieving a CGPA of 8.37."/>
            
        </div>
        </div>
    )
}