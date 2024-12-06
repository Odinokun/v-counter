import { FC, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

type SettingsValType = {
  id: string;
  value: number;
  fieldName: string;
  error: boolean;
};

export const Settings: FC = () => {
  const [settingsVal, setSettingsVal] = useState<SettingsValType[]>([
    { id: crypto.randomUUID(), value: 1, fieldName: 'max value', error: false },
    { id: crypto.randomUUID(), value: 0, fieldName: 'start value', error: false },
  ]);

  const onChangeSetting = (inputId: string, newVal: number) =>
    setSettingsVal(settingsVal.map(s => (s.id === inputId ? { ...s, value: newVal } : s)));

  return (
    <div className='block'>
      <div className='block__body block--border'>
        {settingsVal.map(i => (
          <Input
            key={i.id}
            inputId={i.id}
            fieldName={i.fieldName}
            settingValue={i.value}
            error={i.error}
            onChangeSetting={onChangeSetting}
          />
        ))}
      </div>
      <div className='block__footer  block--border'>
        <Button name='Set' onClick={() => console.log(settingsVal)} disabled={false} />
      </div>
    </div>
  );
};
