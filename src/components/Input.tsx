import { ChangeEvent, FC, useState } from 'react';

type PropsType = {
  fieldName: string;
  error: boolean;
};

export const Input: FC<PropsType> = ({ fieldName, error }) => {
  const [value, setValue] = useState<number>(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
  };

  return (
    <div className='input-wrap '>
      <div>{fieldName}</div>
      <input className={error ? 'input-error' : ''} type='number' value={value} onChange={onChangeHandler} />
    </div>
  );
};
