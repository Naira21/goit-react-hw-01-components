import s from "./Friend.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={s.item} key={id}>
      {isOnline ? (
        <span className={s.status} style={{ backgroundColor: "green" }}></span>
      ) : (
        <span className={s.status} style={{ backgroundColor: "red" }}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
