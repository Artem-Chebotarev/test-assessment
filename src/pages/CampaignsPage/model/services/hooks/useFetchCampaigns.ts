import { useEffect, useState } from 'react';

import { ICampaign } from '@/entities/Campaign';

/**
 * Custom hook to fetch list of campaigns from API
 */
export const useFetchCampaigns = () => {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);

        const response = await fetch(__API__, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          setCampaigns(data.campaigns);
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

    fetchCampaigns();
  }, []);

  return { campaigns, loading, error };
};
