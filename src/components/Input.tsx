import { ChangeEvent, FC, useState } from 'react';

type PropsType = {
  stateInputVal: number;
  stateMaxVal: number;
  stateStartVal: number;
  fieldName: string;
  changeVal: (newVal: number) => void;
  onOffBtn: (val: boolean) => void;
};

export const Input: FC<PropsType> = ({
  stateInputVal,
  stateMaxVal,
  stateStartVal,
  fieldName,
  changeVal,
  onOffBtn,
}) => {
  const [error, setError] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.currentTarget.value;
    changeVal(newValue);

    if (newValue < 0) {
      // negative value check
      setError(true);
      onOffBtn(true);
      return;
    } else if (fieldName === 'Start value:' && newValue >= stateMaxVal) {
      // Start value check
      setError(true);
      onOffBtn(true);
      return;
    } else if (fieldName === 'Max value:' && newValue <= stateStartVal) {
      // Max value check
      setError(true);
      onOffBtn(true);
      return;
    }

    setError(false);
    onOffBtn(false);
  };

  return (
    <div className='input-wrap '>
      <div>{fieldName}</div>
      <input
        className={error ? 'input-error' : ''}
        type='number'
        value={stateInputVal}
        onChange={onChangeHandler}
      />
    </div>
  );
};
