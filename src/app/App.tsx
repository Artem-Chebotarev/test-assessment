import { Suspense } from 'react';

import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from './providers/router';

export const App = () => (
  <div>
    <Suspense fallback=''>
      <Navbar />
      <div className='content-page'>
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
