import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import styles from "./education.module.scss";

export const Education = () => {

  const { id } = useParams();

  const [filteredData, setFilteredData] = useState([]);
  const [currentInd, setCurrentInd] = useState(0);

  const data = useSelector((state) => state.dictionary.dictionary);

 useEffect(() => {
    const filtered = data.filter((item) => item.topic === id & !item.status);
    setFilteredData(filtered);
    setCurrentInd(getRandomDictionaryEntry(filtered));
  }, [data, id]);

  const getRandomDictionaryEntry = (dictionary) => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return randomIndex;
  };

  const nextWord = () => {
    const nextIndex = (currentInd + 1) % filteredData.length;
    setCurrentInd(nextIndex);
  };

  return (
    <div className={styles.wrapper}>
      {id ? (
        <h3> Now I'm learning {id} </h3>
      ) : (
        <h3> Is empty </h3>
      )}

      <div className={styles.cardWrapper}>
        {filteredData.length > 0 && filteredData[currentInd] ? (
          <Card key={filteredData[currentInd].id} props={filteredData[currentInd]} />
        ) : (
          "Oops, your list is empty"
        )}
        <button className={styles.nextBtn} onClick={() => nextWord()}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
};
