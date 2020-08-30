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
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation() {
  return (
    <motion.ul variants={variants}>
      {items.map((item, i) => {
        const { icon, link, name } = item;
        return <MenuItem i={i} key={i} icon={icon} link={link} name={name} />;
      })}
    </motion.ul>
  );
}

const items = [
  {
    icon: faPalette,
    link: "",
    name: "Projects",
  },
  {
    icon: faUserGraduate,
    link: "",
    name: "My Education",
  },
  {
    icon: faAddressCard,
    link: "",
    name: "Contact",
  },
  {
    icon: faHeart,
    link: "",
    name: "About Me",
  },
  {
    icon: "",
    link: "",
    name: "",
  },
];
