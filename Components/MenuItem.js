import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
  open: {
    y: 0,
    height: "80px",
    width: "100%",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    width: 0,
    height: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "rgb(234, 149, 1)",
  "rgb(239, 118, 2)",
  "rgb(244, 88, 3)",
  "rgb(248, 64, 4)",
  "rgb(251, 46, 5)",
];

export default function MenuItem({ i, icon, link, name, toggle }) {
  const style = { color: `${colors[i]}` };
  return (
    <motion.li
      className="nav-list"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="wrapper">
        <FontAwesomeIcon icon={icon} style={style} />
        <a
          onClick={toggle}
          href={link}
          className="text-placeholder"
          style={style}
        >
          {name}
        </a>
      </div>
    </motion.li>
  );
}

MenuItem.propTypes = {
  i: PropTypes.number,
  icon: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
  toogle: PropTypes.func,
};
