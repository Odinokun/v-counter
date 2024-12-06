import { FC, useState } from 'react';
import { Button } from './Button';

type PropsType = {
  maxVal: number;
  startVal: number;
};

export const Counter: FC<PropsType> = ({ maxVal, startVal }) => {
  const [counter, setCounter] = useState<number>(startVal);
  const [error, setError] = useState<boolean>(false);

  const incCount = () => {
    setCounter(prevState => {
      const newValue = prevState + 1;
      if (newValue >= maxVal) {
        setError(true);
      }
      return newValue;
    });
  };

  const resetCount = () => {
    setCounter(0);
    setError(false);
  };

  return (
    <div className='block'>
      <div className='block__body block--border'>
        <h1 className={error ? 'count-val count-val--max' : 'count-val'}>{counter}</h1>
      </div>
      <div className='block__footer  block--border'>
        <Button name='Inc' onClick={incCount} disabled={error} />
        <Button name='Reset' onClick={resetCount} disabled={!counter} />
      </div>
    </div>
  );
};
