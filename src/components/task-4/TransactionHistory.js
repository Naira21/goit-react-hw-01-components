import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((i) => {
          return (
            <tr key={i.id}>
              <td className={s.type}>{i.type}</td>
              <td>{i.amount}</td>
              <td className={s.currency}>{i.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.prototypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    }).isRequired
  ),
};
