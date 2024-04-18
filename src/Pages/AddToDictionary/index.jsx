import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./addToDictionary.module.scss";
import { addToDictionary } from "../../redux/dictionarySlice";
import { getRandomID } from "../../utils/randomId";

export const AddToDictionaryForm = () => {
  const topics = useSelector((state) => state.dictionary.topics);

  const [myLang, setMylang] = useState("");
  const [newLang, setNewlang] = useState("");
  const [topic, setTopic] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const dispatch = useDispatch();
  const currentTime = new Date();
  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0, поэтому добавляем 1
  const year = currentTime.getFullYear();
  // Сформировать строку с датой в нужном формате (например, "dd.mm.yyyy")
  const formattedDate = `${day}.${month}.${year}`;

  const addNewWord = () => {
    const newWord = {
      id: getRandomID(),
      baseLanguage: myLang,
      newLanguage: newLang,
      addingTime: formattedDate,
      topic: topic,
      status: false,
    };
    dispatch(addToDictionary(newWord));
    setMylang("");
    setNewlang("");
    setTopic("");
    setSelectedTopic(""); 
  };

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="your language"
            value={myLang}
            onChange={(e) => setMylang(e.target.value)}
          />
          <input
            type="text"
            placeholder="new language"
            value={newLang}
            onChange={(e) => setNewlang(e.target.value)}
          />
          <button onClick={addNewWord}>Add new word</button>
        </div>
        <div className={styles.checkboxContainer}>
          {topics &&
            topics.map((el, id) => (
              <p key={id}>
                {el}{" "}
                <input
                  className={styles.checkbox}
                  type="radio"
                  value={el}
                  name="check"
                  checked={selectedTopic === el} 
                  onChange={(e) => {
                    setTopic(e.target.value);
                    setSelectedTopic(e.target.value); 
                  }}
                ></input>
              </p>
            ))}
        </div>
      </form>
    </div>
  );
};
