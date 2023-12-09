import { useEffect, useState } from 'react';

import { PING_DELAY } from '@/shared/const/api';

/**
 * Custom hook to increase number of iteration every PING_DELAY ms
 */
export const useIterationNumber = () => {
  const [iteration, setIteration] = useState<number>(0);

  useEffect(() => {
    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      setIteration((prev) => prev + 1);
    }, PING_DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { iteration };
};
