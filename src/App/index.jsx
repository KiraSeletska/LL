import { Outlet } from "react-router-dom";
import { Achievements } from "../components/Achievements";
import { Menu } from "../components/Menu";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Menu />
      <Achievements/>
     <div className={styles.outlet}>  <Outlet/></div>
    </div>
  );
}

export default App;
