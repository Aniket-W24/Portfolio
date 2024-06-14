import { useState } from "react"
import "./ContactForm.css"

export default function ContactForm(){
    let [formData, setFormData] = useState({
        email: "",
        message: "",
    })

    let handleInput = (event)=> {
        setFormData((currData)=> {
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event)=> {
        event.preventDefault();
        console.log(formData);
        setFormData({
            email: "",
            message: "",
        })
    }


    return (
        <form onSubmit={handleSubmit} className="ContactForm">
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder="abc@gmail.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            />
            <br></br>
            <label htmlFor="message">Message : </label>
            <textarea type="text" placeholder="Write Message"
            rows={7}
            cols={14}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInput}
            />
            <br></br>
            <button>Submit</button>
        </form>
    )
}