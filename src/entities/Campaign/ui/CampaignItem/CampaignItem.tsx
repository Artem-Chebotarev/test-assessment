import { Link } from 'react-router-dom';

import { getRouteDashboard } from '@/shared/const/router';
import { Typography } from '@/shared/ui/Typography';

import { ICampaign } from '../../types/campaign';

import cls from './CampaignItem.module.scss';

interface CampaignItemProps {
  campaign: ICampaign;
}

export const CampaignItem = (props: CampaignItemProps) => {
  const { campaign } = props;

  return (
    <Link to={getRouteDashboard(campaign.id)} target='_self'>
      <div className={cls.CampaignItem}>
        <Typography title={campaign.name} />
      </div>
    </Link>
  );
};
