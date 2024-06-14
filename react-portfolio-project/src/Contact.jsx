import Heading from "./Heading";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
export default function Contact() {
  let socials = ["Gmail", "LinkedIn", "Github", "LeetCode"];
  let socialIcons = [
    "fa-regular fa-envelope",
    "fa-brands fa-linkedin",
    "fa-brands fa-github",
    "fa-solid fa-code",
  ];
  let socialLinks = {
    Gmail: "#",
    LinkedIn: "https://www.linkedin.com/in/sonianiket179/",
    Github: "#",
    Leetode: "#",
  };

  return (
    <div id="Contact">
      <Heading heading="Contact" />
      <div className="Contact">
        <Socials
          socials={socials}
          socialIcons={socialIcons}
          socialLinks={socialLinks}
        />
      </div>
      <ContactForm />
    </div>
  );
}
