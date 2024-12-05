import { FC, useState } from 'react';
import { Button } from './Button';

export const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const incCount = () => setCounter(prevState => prevState + 1);
  const resetCount = () => setCounter(0);

  return (
    <div className='block'>
      <div className='block__body block--border'>
        <h1 className='count-val'>{counter}</h1>
      </div>
      <div className='block__footer  block--border'>
        <Button name='Inc' onClick={incCount} />
        <Button name='Reset' onClick={resetCount} disabled={!counter} />
      </div>
    </div>
  );
};
