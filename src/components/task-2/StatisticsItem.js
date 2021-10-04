import s from "./Statistics.module.css";

export const StatisticsItem = ({ id, label, percentage }) => (
  <li key={id} className={s.item} style={{ backgroundColor: colorPicker() }}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage} %</span>
  </li>
);

function colorPicker() {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
}
