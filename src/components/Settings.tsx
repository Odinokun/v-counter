import { FC, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { StateType } from '../App';

type PropsType = {
  state: StateType;
  setState: (newState: StateType) => void;
  setIsChange: (val: boolean) => void;
};

export const Settings: FC<PropsType> = ({ state, setState, setIsChange }) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const onOffBtn = (val: boolean) => setDisabled(val);

  const setStartVal = (newVal: number) => {
    setState({ ...state, startValue: newVal });
    setIsChange(true);
  };
  const setMaxVal = (newVal: number) => {
    setState({ ...state, maxValue: newVal });
    setIsChange(true);
  };

  const setLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(state.maxValue));
    localStorage.setItem('startValue', JSON.stringify(state.startValue));
    setIsChange(false);
    setDisabled(true);
  };

  return (
    <div className='block'>
      <div className='block__body block--border'>
        <Input
          stateInputVal={state.maxValue}
          stateMaxVal={state.maxValue}
          stateStartVal={state.startValue}
          fieldName={'Max value:'}
          changeVal={setMaxVal}
          onOffBtn={onOffBtn}
        />
        <Input
          stateInputVal={state.startValue}
          stateMaxVal={state.maxValue}
          stateStartVal={state.startValue}
          fieldName={'Start value:'}
          changeVal={setStartVal}
          onOffBtn={onOffBtn}
        />
      </div>
      <div className='block__footer  block--border'>
        <Button name='Set' onClick={setLocalStorage} disabled={disabled} />
      </div>
    </div>
  );
};
