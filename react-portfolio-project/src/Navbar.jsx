import "./Navbar.css"
import NavbarOptions from "./NavbarOptions"

export default function Navbar(){
    let options = ["Aniket", ,"Work", "Skills", "Education", "About", "Contact"]
    return (
        <div className="Navbar">
            {options.map(option=> <NavbarOptions key={option} option={option}/>)}
        </div>
    )
}