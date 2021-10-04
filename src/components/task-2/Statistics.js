import s from "./Statistics.module.css";
import PropTypes from "prop-types";
import Title from "./Title";
import { StatisticsItem } from "./StatisticsItem";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title === "Upload stats" && <Title title={title} />}
      <ul className={s.statList}>
        {stats.map((st) => (
          <StatisticsItem
            key={st.id}
            label={st.label}
            percentage={st.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
