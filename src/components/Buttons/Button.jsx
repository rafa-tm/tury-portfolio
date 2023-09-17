import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button(
  { children, to, type, className, action, target, rel, disable },
  props
) {
  let style = "";
  switch (type) {
    case "primary":
      style = "bg-primary text-lightText ";
      break;
    case "secondary":
      style = "bg-secondary text-lightText";
      break;
    case "tertiary":
      style = "bg-tertiary text-lightText";
      break;
    case "gradient":
      style = "bg-gradient-to-r from-primary to-secondary text-lightText";
      break;
    case "text":
      style = "text-lightText dark:text-darkText";
      break;
    default:
      break;
  }

  if (type === "text") {
    style =
      style +
      " hover:scale-105 rounded-lg font-semibold flex justify-center min-w-max";
  } else {
    style =
      style +
      " hover:scale-105 rounded-lg font-semibold shadow-lg flex justify-center min-w-max";
  }

  if (disable) {
    style = style + " opacity-50 cursor-not-allowed";
    return (
      <button className={style + " " + className} type="button" {...props}>
        {children}
      </button>
    );
  }

  if (action) {
    return (
      <button
        onClick={action}
        className={style + " " + className}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        to={to}
        className={style + " " + className}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    );
  }
}

Button.propTypes = {
  props: PropTypes.any,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  disable: PropTypes.bool,
};
