import { useEffect, useState } from 'react';

import { ICampaign, TStatus } from '@/shared/types/api';

/**
 * Custom hook to fetch data from API
 */
export const useFetchCampaigns = () => {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [status, setStatus] = useState<TStatus>('idle');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setStatus('loading');

        const response = await fetch(__API__, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          setCampaigns(data);

          setStatus('success');
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.message);

          setError(e.message);
          setStatus('error');
        }
      } finally {
        setStatus('idle');
      }
    };

    fetchCampaigns();
  }, []);

  return { campaigns, status, error };
};
