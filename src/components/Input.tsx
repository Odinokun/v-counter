import { ChangeEvent, FC, useState } from 'react';

type PropsType = {
  inputId: string;
  fieldName: string;
  settingValue: number;
  error: boolean;
  onChangeSetting: (inputId: string, newVal: number) => void;
};

export const Input: FC<PropsType> = ({ inputId, fieldName, settingValue, error, onChangeSetting }) => {
  const [value, setValue] = useState<number>(settingValue);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeSetting(inputId, +e.currentTarget.value);
    setValue(+e.currentTarget.value);
  };

  return (
    <div className='input-wrap '>
      <div>{fieldName}</div>
      <input className={error ? 'input-error' : ''} type='number' value={value} onChange={onChangeHandler} />
    </div>
  );
};
