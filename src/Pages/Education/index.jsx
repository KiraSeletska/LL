import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import styles from "./education.module.scss" 

export const Education = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.dictionary.dictionary);

  const getRandomDictionaryEntry = (dictionary) => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return randomIndex;
  };
  const randomInd = getRandomDictionaryEntry(data);

  const [currentInd, setCurrentInd] = useState(randomInd);

  const nextWord = () => {
    const nextIndex = (currentInd + 1) % data.length;
    setCurrentInd(nextIndex);
  };
  /*
const dictionary = useSelector((state) => state.dictionary.dictionary);
const sortedDictionary = dictionary.filter(el => el.topic === id)

  const getRandomDictionaryEntry = (dictionary) => {// Генерируем случайный индекс от 0 до длины массива минус 1
    const randomIndex = Math.floor(Math.random() * dictionary.length);// Возвращаем элемент с соответствующим индексом
    return dictionary[randomIndex];
  }
  const randomEntry = getRandomDictionaryEntry(sortedDictionary);//взять только первый рандомный Id и от него по длинне показывать слова
 // console.log(randomEntry);

  const [openedCart, setOpenedCart] = useState(randomEntry)
  const [currentWordIndex, setCurrentWordIndex] = useState(() => {
    const randomEntry = getRandomDictionaryEntry(sortedDictionary);
    return sortedDictionary.indexOf(randomEntry);
  });

  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % sortedDictionary.length;
    setCurrentWordIndex(nextIndex);
  };*/

  return (
    <div className={styles.wrapper}>
     {id ? <h3> Now I'm learning  {id} </h3> : <h3> Is empty</h3>

     } 
<div className={styles.cardWrapper}>
{data[currentInd] ? (
        <Card key={data[currentInd].id} props={data[currentInd]} />
      ) : (
        "Oops, your list is empty"
      )}
      <button className={styles.nextBtn} onClick={() => nextWord()}><FontAwesomeIcon icon={faForward} /></button>
</div>
    
    </div>
  );
};
