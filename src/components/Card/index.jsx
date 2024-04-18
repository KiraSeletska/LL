import { useState } from "react";
import styles from "./card.module.scss";
import { useDispatch} from "react-redux";
import { changeStatus, deleteWord } from "../../redux/dictionarySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  const [isTranslateVisible, setTranslateVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleTranslateVisibility = () => {
    setTranslateVisible(!isTranslateVisible);
  };
  const handleStatusChange = (id) => {
    dispatch(changeStatus(id));
  };

  const hendleDeletWord = (id) => {
    dispatch(deleteWord(id));
    console.log(id);
  };

  return (
    <div
      className={`${styles.card} ${
        props.props.status ? styles.know : styles.new
      }`}
    >
      <button
        className={styles.deleteBtn}
        onClick={() => hendleDeletWord(props.props.id)}
      >
        X
      </button>
      <div className={styles.wordsWrapper}>
        <p>{props.props.baseLanguage}</p>
        <button
          className={styles.showTranslate}
          onClick={toggleTranslateVisibility}
        >
          {!isTranslateVisible ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <p>{props.props.newLanguage}</p>
          )}
        </button>
      </div>

      <button
        className={styles.knowBtn}
        onClick={() => handleStatusChange(props.props.id)}
      >
        {!props.props.status ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faQuestion} />
        )}
      </button>
    </div>
  );
};
