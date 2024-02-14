import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomLink = ({ path, text }) => (
  <Link
    style={{
      border: "none",
      cursor: "pointer",
      padding: ".3rem 1rem",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      borderRadius: ".2rem",
      background: "#ddd",
    }}
    to={path}
  >
    {text}
  </Link>
);

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLink;
