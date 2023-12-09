import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { PageError } from '@/widgets/PageError';
import { PageLoader } from '@/widgets/PageLoader';

import { useFetchCampaigns } from '../model/services/hooks/useFetchCampaigns';

import cls from './CampaignsPage.module.scss';

interface CampaignsPageProps {
  className?: string;
}

const CampaignsPage = (props: CampaignsPageProps) => {
  const { className } = props;

  const { campaigns, status, error } = useFetchCampaigns();

  if (error) {
    return <PageError message={error} />;
  }

  if (status === 'loading') {
    return <PageLoader />;
  }

  return (
    <Page className={classNames(cls.CampaignsPage, {}, [className])}>
      CampaignsPage
    </Page>
  );
};

export default CampaignsPage;
