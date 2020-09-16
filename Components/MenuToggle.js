import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Path = (props) => {
  const color =
    props.theme === "light" ? "var(--dark-highlight)" : "var(--header-color)";
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={color}
      strokeLinecap="round"
      transition="all 0.5s ease-in"
      {...props}
    />
  );
};

export default function MenuToggle({ theme, toggle }) {
  return (
    <button
      aria-label="Toggle Menu"
      className="nav-button fixed"
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          theme={theme}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          theme={theme}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          theme={theme}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

MenuToggle.propTypes = {
  toggle: PropTypes.func,
};
