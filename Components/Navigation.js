import PropTypes from "prop-types";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import {
  faAddressCard,
  faHeart,
  faPalette,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: {
    opacity: 1,
    width: "100vw",
    overflow: "initial",
  },
  closed: {
    height: 0,
    width: 0,
    opacity: 0,
    overflow: "hidden",
  },
};

export default function Navigation({ toggle }) {
  return (
    <motion.ul variants={variants} className="navigation">
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
    </motion.ul>
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
    link: "#contact-me",
    name: "Contact Me",
  },
  {
    icon: faHeart,
    link: "#about-me",
    name: "About Me",
  },
];
