import { FC } from 'react';
import { Button } from './Button';

export const Counter: FC = () => {
  return (
    <div className='block'>
      <div className='block__body block--border'>
        <h1 className='count-val'>0</h1>
      </div>
      <div className='block__footer  block--border'>
        <Button name='Inc' onClick={() => {}} />
        <Button name='Reset' onClick={() => {}} />
      </div>
    </div>
  );
};
