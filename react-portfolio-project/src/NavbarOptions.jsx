import "./NavbarOptions.css";
export default function NavbarOptions({ option }) {
  const className =
    option === "Aniket" ? "NavbarOptions Aniket" : "NavbarOptions";
  return <a href={"#" + option}className={className}>{option}</a>;
}

// style={option==="Aniket" ? logoStyles : styles}
