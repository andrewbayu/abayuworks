import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './styles/index.css';
import './styles/cmo-test.css';

export const createRoot = ViteReactSSG({ routes });
