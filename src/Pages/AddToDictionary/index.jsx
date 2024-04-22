import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./addToDictionary.module.scss";
import { addToDictionary } from "../../redux/dictionarySlice";
import { getRandomID } from "../../utils/randomId";
import { getCurrentDateFormatted } from "../../utils/date";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddToDictionaryForm = () => {
  const topics = useSelector((state) => state.dictionary.topics);

  const [myLang, setMylang] = useState("");
  const [newLang, setNewlang] = useState("");
  const [topic, setTopic] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const dispatch = useDispatch();

  const addNewWord = () => {
    if (!myLang || !newLang || !topic) {
     toast.error('Please fill out all fields: your language, new language and select the topic');
      return;
    }
    const newWord = {
      id: getRandomID(),
      baseLanguage: myLang,
      newLanguage: newLang,
      addingTime: getCurrentDateFormatted(),
      memorizationTime: "",
      topic: topic,
      status: false,
    };
    dispatch(addToDictionary(newWord));
    toast.success('Word added successfully to ' + topic);
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
          <ToastContainer />
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
