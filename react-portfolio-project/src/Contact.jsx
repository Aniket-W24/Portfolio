// import Heading from "./Heading";
// import Socials from "./Socials";
// import ContactForm from "./ContactForm";
// export default function Contact() {
//   let socials = ["Gmail", "LinkedIn", "Github", "LeetCode"];
//   let socialIcons = [
//     "fa-regular fa-envelope",
//     "fa-brands fa-linkedin",
//     "fa-brands fa-github",
//     "fa-solid fa-code",
//   ];
//   let socialLinks = {
//     Gmail: "#",
//     LinkedIn: "https://www.linkedin.com/in/sonianiket179/",
//     Github: "#",
//     Leetode: "#",
//   };

//   return (
//     <div id="Contact">
//       <Heading heading="Contact" />
//       <div className="Contact">
//         <Socials
//           socials={socials}
//           socialIcons={socialIcons}
//           socialLinks={socialLinks}
//         />
//       </div>
//       <ContactForm />
//     </div>
//   );
// }



// ------------------

import Heading from "./Heading";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
export default function Contact() {
  // let socials = ["Gmail", "LinkedIn", "Github", "LeetCode"];
  const socials = [
    {
      name:"Gmail",
      icon:"fa-regular fa-envelope",
      links:"mailto:aniket.soni.w24@gmail.com",
    },
    {
      name:"LinkedIn",
      icon:"fa-brands fa-linkedin",
      links:"https://www.linkedin.com/in/sonianiket179/",
    },
    {
      name:"Github",
      icon:"fa-brands fa-github",
      links:"https://github.com/Aniket-W24",
    },
    {
      name:"LeetCode",
      icon:"fa-solid fa-code",
      links:"https://leetcode.com/u/aniket_soni_w24/",
    },
  ]
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
        />
      </div>
      <ContactForm />
    </div>
  );
}
