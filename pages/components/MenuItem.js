import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLinks from "./SocialLinks";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
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

export const MenuItem = ({ i, icon, link, name }) => {
  const style = { color: `${colors[i]}` };
  if (i < 4) {
    return (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="wrapper">
          <FontAwesomeIcon icon={icon} style={style} />
          <a href={link} className="text-placeholder" style={style}>
            {name}
          </a>
        </div>
      </motion.li>
    );
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={icon} style={style} />
      <SocialLinks i={i} colors={colors} />
    </motion.li>
  );
};
