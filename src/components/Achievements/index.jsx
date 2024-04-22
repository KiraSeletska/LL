import styles from "./achievements.module.scss";
import { useSelector } from "react-redux";
import { getCurrentDateFormatted } from "../../utils/date";

export const Achievements = () => {
  const data = useSelector((state) => state.dictionary.dictionary);

  const wordsAddedToday = data.filter((word) => {
    return word.addingTime === getCurrentDateFormatted();
  });
  const countWordsAddedToday = wordsAddedToday.length;

  const wordLernedToday = data.filter((word) => {
    return word.memorizationTime === getCurrentDateFormatted();
  });
  const countWordLernedToday = wordLernedToday.length;

  

  return (
    <div className={styles.wrapper}>
      {
        <p>
          Total learned <span>{data.filter(word => word.status).length}</span> words
        </p>
      }

      <p>
        Learned today <span>{countWordLernedToday}</span>words
      </p>

      <p>
        Added today <span>{countWordsAddedToday}</span> words
      </p>
    </div>
  );
};
