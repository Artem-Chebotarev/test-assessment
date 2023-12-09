import { CampaignList } from '@/entities/Campaign';
import { Page } from '@/widgets/Page';
import { PageError } from '@/widgets/PageError';
import { PageLoader } from '@/widgets/PageLoader';

import { useFetchCampaigns } from '../model/services/hooks/useFetchCampaigns';

const CampaignsPage = () => {
  // Get data for CampaignList
  const { campaigns, loading, error } = useFetchCampaigns();

  if (error) {
    return <PageError message={error} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Page>
      <CampaignList campaigns={campaigns} />
    </Page>
  );
};

export default CampaignsPage;
