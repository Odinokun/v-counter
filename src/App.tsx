import { useState } from 'react';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import './App.css';

export type StateType = {
  maxValue: number;
  startValue: number;
};

function App() {
  const [state, setState] = useState<StateType>({ maxValue: 5, startValue: 0 });
  console.log('state', state);
  return (
    <div className='wrap block--border'>
      <Settings state={state} setState={setState} />
      <Counter maxVal={state.maxValue} startVal={state.startValue} />
    </div>
  );
}

export default App;
