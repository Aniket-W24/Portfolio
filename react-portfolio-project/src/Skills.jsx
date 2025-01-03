import EducationCard from "./EducationCard"
import "./Skills.css";
import Heading from "./Heading";
export default function Skills(){
    return (
        <div id="Skills">
        <Heading heading="Skills" />
        <div className="Skills">
            <EducationCard title="Node js" imgSrc="nodejs.png" body="I'm skilled in Node.js, proficient in building scalable server-side applications, handling asynchronous operations, and developing RESTful APIs."/>
            <EducationCard title="Express" imgSrc="expressjs.png" body="Experienced in Express.js, I specialize in crafting efficient server-side applications, designing RESTful APIs, and managing asynchronous operations."/>
            <EducationCard title="React" imgSrc="react.png" body="I specialize in React.js, proficient in developing dynamic and interactive user interfaces, managing state efficiently, and building scalable web applications."/>
            <EducationCard title="MongoDB" imgSrc="mongo.png" body="I have expertise in MongoDB, adept at designing and implementing robust and scalable database solutions, handling data efficiently, and ensuring high-performance database operations."/>
        </div>
        </div>

        
        
    )
}