import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return <h2 className={s.title}> {title}</h2>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
