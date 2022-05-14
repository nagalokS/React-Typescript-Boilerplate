import ReactDom from 'react-dom/client';
import App from '@components/App';
import { registerSerwiceWorker } from './swReagistration.js';

const root = ReactDom.createRoot(document.getElementById('root')!);
root.render(<App />);

registerSerwiceWorker();
