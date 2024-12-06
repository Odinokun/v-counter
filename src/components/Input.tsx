import { ChangeEvent, FC, useState } from 'react';

type PropsType = {
  stateVal: number;
  fieldName: string;
  changeVal: (newVal: number) => void;
  onOffBtn: (val: boolean) => void;
};

export const Input: FC<PropsType> = ({ stateVal, fieldName, changeVal, onOffBtn }) => {
  const [value, setValue] = useState<number>(stateVal);
  const [error, setError] = useState<boolean>(false);
  // const [onOffChangeVal, setOnOffChangeVal] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
    if (+e.currentTarget.value < 0) {
      onOffBtn(true);
      setError(true);
    } else {
      onOffBtn(false);
      setError(false);
      changeVal(+e.currentTarget.value);
    }
  };

  return (
    <div className='input-wrap '>
      <div>{fieldName}</div>
      <input className={error ? 'input-error' : ''} type='number' value={value} onChange={onChangeHandler} />
    </div>
  );
};
