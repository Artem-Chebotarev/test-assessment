import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TDashboardData } from '@/shared/types/dashboard';

import { useIterationNumber } from './useIterationNumber';
import { usePrevious } from './usePrevious';

/**
 * Custom hook to fetch dashboard data from API
 */
export const useFetchDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<TDashboardData | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Get iteration number
  const { iteration } = useIterationNumber();

  // Get campaign id from params
  const { id: cid } = useParams();

  const dashboardAPI = `${__API__}/${cid}?number=${iteration}`;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const response = await fetch(dashboardAPI, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          setDashboardData(data);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.message);

          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [dashboardAPI]);

  // Get previous dashboardData
  const prevDashboardData = usePrevious(dashboardData);

  return { dashboardData, prevDashboardData, iteration, loading, error };
};
