import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import { App } from './app/App';

import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'The root container was not found. Failed to mount the react application',
  );
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
