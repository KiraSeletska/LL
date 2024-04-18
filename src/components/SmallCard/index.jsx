import styles from "./smallCard.module.scss"
import { useDispatch} from "react-redux";
import { deleteWord } from "../../redux/dictionarySlice";
   

export const SmallCard = (props) => {
    const dispatch = useDispatch();
    const hendleDeletWord = (id) => {
        dispatch(deleteWord(id));
        console.log(id);
      };
    return(
        <div className={styles.smallCardContainer}>
                 <p>{props.props.baseLanguage}</p>
                 <p>{props.props.newLanguage}</p>
                 <span>{props.props.topic}</span>
                 <button  onClick={() => hendleDeletWord(props.props.id)}>X</button>
        </div>
    )
}