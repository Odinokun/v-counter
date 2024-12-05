import { FC } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Settings: FC = () => {
  return (
    <div className='block'>
      <div className='block__body block--border'>
        <Input fieldName='max value' />
        <Input fieldName='start value' />
      </div>
      <div className='block__footer  block--border'>
        <Button name='Set' onClick={() => {}} />
      </div>
    </div>
  );
};
