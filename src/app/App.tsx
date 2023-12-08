import { Suspense } from 'react';

export const App = () => (
  <div>
    <Suspense fallback=''>Initial</Suspense>
  </div>
);
