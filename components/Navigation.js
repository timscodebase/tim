import PropTypes from "prop-types";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import {
  faAddressCard,
  faHeart,
  faPalette,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ toggle }) {
  return (
    <ul>
      {items.map((item, i) => {
        const { icon, link, name } = item;
        return (
          <MenuItem
            toggle={toggle}
            i={i}
            key={i}
            icon={icon}
            link={link}
            name={name}
          />
        );
      })}
    </ul>
  );
}

Navigation.propTypes = {
  toggle: PropTypes.func,
};

const items = [
  {
    icon: faPalette,
    link: "#projects",
    name: "Projects",
  },
  {
    icon: faUserGraduate,
    link: "#education",
    name: "Education",
  },
  {
    icon: faAddressCard,
    link: "#contact",
    name: "Contact",
  },
  {
    icon: faHeart,
    link: "#about-me",
    name: "About Me",
  },
  {
    icon: "",
    link: "",
    name: "",
  },
];
