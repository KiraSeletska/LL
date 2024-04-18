import styles from "./achievements.module.scss";

export const Achievements = () => {
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
