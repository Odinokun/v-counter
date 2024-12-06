import { FC, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

type SettingsValType = {
  [key: string]: number;
};

export const Settings: FC = () => {
  const [settingsVal, setSettingsVal] = useState<SettingsValType>({
    maxVal: 0,
    startVal: 0,
  });

  return (
    <div className='block'>
      <div className='block__body block--border'>
        <Input fieldName='max value' error={false} />
        <Input fieldName='start value' error={false} />
      </div>
      <div className='block__footer  block--border'>
        <Button name='Set' onClick={() => {}} disabled={true} />
      </div>
    </div>
  );
};
