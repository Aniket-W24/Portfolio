// import "./Socials.css";
// export default function Socials({ socials, socialIcons, socialLinks }) {
//   console.log(typeof socials[0]);
//   return (
//     <div className="Socials">
//       <div className="SocialIcon">
//         {socialIcons.map((socialIcon) => {
//           return (
//             <span
//             //   style={{ textDecoration: "none", color: "black" }}
//               key={socialIcon}
//               target="_blank"
//             >
//               <i className={socialIcon}></i>
//             </span>
//           );
//         })}
//       </div>
//       <div className="SocialName">
//         {socials.map((social) => {
//           return (
//             <a
//             //   href={socialLinks.social}
//                 href={socialLinks.LinkedIn}
//               style={{ textDecoration: "none", color: "white" }}
//               key={social}
//               target="_blank"
//             >
//               {social}
//             </a>
//           ); 
//         })}
//       </div>
//     </div>
//   );
// }



// ------------------

import "./Socials.css";
export default function Socials( {socials} ) {
  console.log("->>>>>>>>",socials);
  return (
    <div className="Socials">
        {socials.map((social) => {
          console.log(social.name)
          return (
            <div style={{textAlign: "center"}}>
            <a href={social.links}
              style={{ textDecoration: "none", color: "white" }}
              key={social.name}
              target="_blank"
            >
              <i className={`fa-2x ${social.icon}`} style={{color:"white"}}></i><br />
              {social.name}
            </a>
            </div>
          );
        })}
    </div>
  );
}
