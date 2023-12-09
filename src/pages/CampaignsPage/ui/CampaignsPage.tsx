import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './CampaignsPage.module.scss';

interface CampaignsPageProps {
  className?: string;
}

export const CampaignsPage = ({ className }: CampaignsPageProps) => (
  <Page className={classNames(cls.CampaignsPage, {}, [className])}>
    CampaignsPage
  </Page>
);
