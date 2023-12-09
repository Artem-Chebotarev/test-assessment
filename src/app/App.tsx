import { Suspense } from 'react';

import { AppRouter } from './providers/router';

export const App = () => (
  <div>
    <Suspense fallback=''>
      <AppRouter />
    </Suspense>
  </div>
);
