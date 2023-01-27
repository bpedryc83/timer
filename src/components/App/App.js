import styles from './App.module.scss';
import Timer from '../Timer/Timer';

const App = () => {
  return (
    <div className={styles.main}>
      <Timer />
    </div>
  );
};

export default App;