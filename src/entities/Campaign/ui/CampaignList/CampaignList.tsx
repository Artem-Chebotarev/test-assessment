import { Typography, TypographyAlign } from '@/shared/ui/Typography';

import { ICampaign } from '../../types/campaign';
import { CampaignItem } from '../CampaignItem/CampaignItem';

import cls from './CampaignList.module.scss';

interface CampaignListProps {
  campaigns: ICampaign[];
}

export const CampaignList = (props: CampaignListProps) => {
  const { campaigns } = props;

  return (
    <div className={cls.CampaignList}>
      {campaigns.length ? (
        <>
          {campaigns.map((elem) => (
            <CampaignItem key={elem.id} campaign={elem} />
          ))}
        </>
      ) : (
        <Typography align={TypographyAlign.CENTER} title='No results found' />
      )}
    </div>
  );
};
