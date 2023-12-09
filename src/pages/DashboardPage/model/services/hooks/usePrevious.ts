import { useEffect, useRef } from 'react';

import { TDashboardData } from '@/shared/types/dashboard';

/**
 * Custom hook to save previous value of dashboardData
 */
export const usePrevious = (dashboardData: TDashboardData | null) => {
  const prevDashboardDataRef = useRef<TDashboardData | null>(null);

  useEffect(() => {
    prevDashboardDataRef.current = dashboardData;
  }, [dashboardData]);

  const prevDashboardData = prevDashboardDataRef.current;

  return prevDashboardData;
};
