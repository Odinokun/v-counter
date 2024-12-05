import { FC, useState } from 'react';

type PropsType = {
  fieldName: string;
};

export const Input: FC<PropsType> = ({ fieldName }) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className='input-wrap'>
      <div>{fieldName}</div>
      <input value={value} />
    </div>
  );
};
