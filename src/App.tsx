import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';

function App() {
  return (
    <div className='wrap block--border'>
      <Settings />
      <Counter />
    </div>
  );
}

export default App;
