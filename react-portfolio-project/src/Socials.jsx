import "./Socials.css";
export default function Socials({ socials, socialIcons, socialLinks }) {
  console.log(socialLinks.LinkedIn);
  return (
    <div className="Socials">
      <div className="SocialIcon">
        {socialIcons.map((socialIcon) => {
          return (
            <a
              href="#"
              style={{ textDecoration: "none", color: "black" }}
              key={socialIcon}
            >
              <i className={socialIcon}></i>
            </a>
          );
        })}
      </div>
      <div className="SocialName">
        {socials.map((social) => {
          return (
            <a
              href={socialLinks.social}
              style={{ textDecoration: "none", color: "black" }}
              key={social}
            >
              {social}
            </a>
          );
        })}
      </div>
    </div>
  );
}
