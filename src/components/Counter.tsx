import { FC, useEffect, useState } from 'react';
import { Button } from './Button';
import { StateType } from '../App';

type PropsType = {
  state: StateType;
  isChange: boolean;
};

export const Counter: FC<PropsType> = ({ state, isChange }) => {
  const [counter, setCounter] = useState<number>(state.startValue);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setCounter(state.startValue);
    setError(false);
  }, [state.startValue]);

  const incCount = () => {
    setCounter(prevState => {
      const newValue = prevState + 1;
      if (newValue >= state.maxValue) {
        setError(true);
      }
      return newValue;
    });
  };

  const resetCount = () => {
    setCounter(state.startValue);
    setError(false);
  };

  return (
    <div className='block'>
      <div className='block__body block--border'>
        {isChange ? (
          <h3>Set new value</h3>
        ) : (
          <h1 className={error ? 'count-val count-val--max' : 'count-val'}>
            {counter}
          </h1>
        )}
      </div>
      <div className='block__footer  block--border'>
        <Button name='Inc' onClick={incCount} disabled={error} />
        <Button name='Reset' onClick={resetCount} disabled={!counter} />
      </div>
    </div>
  );
};
