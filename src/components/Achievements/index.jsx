import styles from "./achievements.module.scss";
import { useSelector } from "react-redux";

export const Achievements = () => {
  const data = useSelector((state) => state.dictionary.dictionary);
console.log(data)
 
const currentTime = new Date();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1; 
const year = currentTime.getFullYear();
const formattedDate = `${day}.${month}.${year}`;

return (
    <div className={styles.wrapper}>
      <p>
        Reps per day <span>10</span> words
      </p>

      <p>
        Learned <span>5</span>words
      </p>

      <p>
        Added <span>24</span>words
      </p>
    </div>
  );
};
