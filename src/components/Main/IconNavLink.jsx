import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

export const IconNavLink = ({ path, src, alt, title }) => {
  return (
    <NavLink to={path}>
      <img className="h-9 w-9" src={src} alt={alt} title={title} />
    </NavLink>
  );
};

IconNavLink.propTypes = {
  path: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  title: propTypes.string,
};
