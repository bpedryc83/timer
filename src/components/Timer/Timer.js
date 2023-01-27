import { useEffect, useState } from 'react';
import moment from 'moment';
import Button from '../Button/Button'

import styles from './Timer.module.scss';

let counter;

const Timer = () => {

  const timeZero = () => moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).format('HH:mm:ss:SSS');

  const [time, setTime] = useState(timeZero);
  const [intervalRun, setIntervalRun] = useState(false);
  
  const setNewTime = () => {
    setTime(time => moment(time, 'HH:mm:ss:SSS').add(1, 'ms').format('HH:mm:ss:SSS'));
  }

  const counterStarted = e => {
    e.preventDefault();
    if (intervalRun === false){
      setIntervalRun(true);
    }
  };

  const counterStop = e => {
    e.preventDefault();
    clearInterval(counter);
  }

  const counterReset = e => {
    e.preventDefault();
    setTime(timeZero);
    setIntervalRun(false);
  }
  
  useEffect (() => {
    return () => {
    counter = setInterval(setNewTime, 1)}}, [intervalRun]);
  
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