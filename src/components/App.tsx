import { VFC } from 'react';
import '../scss/style.scss';
import '../styles/style.css';
import Button from './Button/Button';

const App: VFC = () => {
  let a;
  let b;
  return (
    <div>
      <h1>react render</h1>
      <Button>dsadsada</Button>
    </div>
  );
};
export default App;
