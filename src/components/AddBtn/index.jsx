import styles from './addBtn.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

export const AddBtn = ({onClick}) => {

    return(
        <button onClick={onClick} className={styles.addBtn}><FontAwesomeIcon icon={faSquarePlus} /></button>
    )
}