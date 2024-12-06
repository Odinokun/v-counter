import { useEffect, useState } from 'react';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import './App.css';

export type StateType = {
  maxValue: number;
  startValue: number;
};

function App() {
  const [state, setState] = useState<StateType>({ maxValue: 5, startValue: 0 });
  const [isChange, setIsChange] = useState<boolean>(false);

  useEffect(() => {
    const maxValue = Number(localStorage.getItem('maxValue') || 5);
    const startValue = Number(localStorage.getItem('startValue') || 0);
    setState(prevState => ({
      ...prevState,
      maxValue: maxValue,
      startValue: startValue,
    }));
  }, []);

  return (
    <div className='wrap block--border'>
      <Settings state={state} setState={setState} setIsChange={setIsChange} />
      <Counter state={state} isChange={isChange} />
    </div>
  );
}

export default App;
