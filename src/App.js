import './App.css';
import { HookUseEffect } from './hooks/hookUseEffect';
import { HookUseState } from './hooks/hookUseState';

function App() {
  return (
    <div className="App">
      <HookUseState />
      <HookUseEffect />
    </div>
  );
}

export default App;
