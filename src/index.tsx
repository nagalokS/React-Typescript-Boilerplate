import ReactDom from 'react-dom/client';
import App from '@components/App';

const root = ReactDom.createRoot(document.querySelector('#root') as HTMLDivElement);
root.render(<App />);
