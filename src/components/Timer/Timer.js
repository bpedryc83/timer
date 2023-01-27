import { useEffect, useState } from 'react';
import moment from 'moment';
import Button from '../Button/Button'

import styles from './Timer.module.scss';

let counter;

const Timer = () => {

  const timeZero = () => moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).format('HH:mm:ss:SSS');

  const [time, setTime] = useState(timeZero);
  const [intervalRun, setIntervalRun] = useState(false);
  
  const counterStarted = e => {
    e.preventDefault();
    setIntervalRun(true);
  };

  const counterStop = e => {
    e.preventDefault();
    clearInterval(counter);
    setIntervalRun(false);
  }

  const counterReset = e => {
    e.preventDefault(); 
    setTime(timeZero);
    setIntervalRun(false);
  }
  
  useEffect (() => {    
      clearInterval(counter);

      const setNewTime = () => {
        if(intervalRun) {      
          setTime(time => moment(time, 'HH:mm:ss:SSS').add(1, 'ms').format('HH:mm:ss:SSS'));
        }
      }

      counter = setInterval(setNewTime, 1);
    }, [intervalRun]);
  
  return (
    <div className={styles.timerArea}>
      <div className={styles.counter}>{time}</div>
      <div className={styles.divButtons}>
        <Button onClick={counterStarted}>Start</Button>
        <Button onClick={counterStop}>Stop</Button>
        <Button onClick={counterReset}>Reset</Button>
      </div>
    </div>
  );

}

export default Timer;