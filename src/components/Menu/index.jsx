import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AddBtn } from "../AddBtn";

export const Menu = () => {
  const dataWords = useSelector((state) => state.dictionary.topics);
  const dataStateWords = useSelector((state) => state.dictionary.state);

  return (
    <div className={styles.wrapper}>
      <ul>
        {dataWords &&
          dataWords.map((el) => (
            <NavLink to={`/Education/${el}`} key={el}>
              <li>{el}</li>
            </NavLink>
          ))}

        {dataStateWords &&
          dataStateWords.map((el) => (
            <NavLink to={`/All/${el}`} key={el}>
              <li>{el}</li>
            </NavLink>
          ))}
      </ul>

      <NavLink to="/AddToDictionary"><AddBtn /></NavLink>
    </div>
  );
};
