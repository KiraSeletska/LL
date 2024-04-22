import styles from "./smallCard.module.scss"
import { useDispatch} from "react-redux";
import { deleteWord } from "../../redux/dictionarySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { changeStatus } from "../../redux/dictionarySlice";

export const SmallCard = (props) => {

    const dispatch = useDispatch();

    const hendleDeletWord = (id) => {
        dispatch(deleteWord(id));
        console.log(id);
      };
      const handleStatusChange = (id) => {
        dispatch(changeStatus(id));
      };
    return(
        <div className={styles.smallCardContainer}>
                 <p>{props.props.baseLanguage}</p>
                 <p>{props.props.newLanguage}</p>
                <button  onClick={() => handleStatusChange(props.props.id)} className={styles.updateBtn}> {props.props.status 
                 ? <FontAwesomeIcon icon={faQuestion} />
                  :  <FontAwesomeIcon icon={faCheck} />}
                    </button> 
                 <span>{props.props.topic}</span>
            
                 <button className={styles.deleteBtn} onClick={() => hendleDeletWord(props.props.id)}>X</button>
        </div>
    )
}