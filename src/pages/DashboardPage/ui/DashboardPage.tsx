import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
  Typography,
  TypographyAlign,
  TypographySize,
} from '@/shared/ui/Typography';
import { Page } from '@/widgets/Page';
import { PageError } from '@/widgets/PageError';
import { PageLoader } from '@/widgets/PageLoader';

import { useCalcRecentData } from '../model/services/hooks/useCalcRecentData';
import { useFetchDashboardData } from '../model/services/hooks/useFetchDashboardData';

import cls from './DashboardPage.module.scss';

const DashboardPage = () => {
  // Get data for dashboard
  const { dashboardData, prevDashboardData, iteration, loading, error } =
    useFetchDashboardData();

  // Get data for dashboard that requires calculations
  const {
    ctr,
    mostRecentImpressions,
    mostRecentClicks,
    mostRecentCtr,
    mostRecentUsers,
  } = useCalcRecentData(dashboardData, prevDashboardData);

  if (error) {
    return <PageError message={error} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Page className={cls.DashboardPage}>
      {dashboardData ? (
        <div className={cls.DashboardWrapper}>
          {/* Dashboard title (current iteration) */}
          <div
            className={classNames(cls.DashboardTile, {}, [
              cls.DashboardIteration,
            ])}
          >
            <Typography title='Current Iteration' size={TypographySize.S} />
            <Typography title={iteration.toString()} />
          </div>

          {/* Dashboard row (Total) */}
          <div className={cls.DashboardRow}>
            <Typography title='Total:' size={TypographySize.M} />
            <div className={cls.DashboardGrid}>
              <div className={cls.DashboardTile}>
                <Typography title='Impressions' size={TypographySize.S} />
                <Typography title={dashboardData?.impressions.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography title='Clicks' size={TypographySize.S} />
                <Typography title={dashboardData?.clicks.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography title='CTR' size={TypographySize.S} />
                <Typography title={ctr?.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography title='Users' size={TypographySize.S} />
                <Typography title={dashboardData?.users.toString()} />
              </div>
            </div>
          </div>

          {/* Dashboard row (Most Recent) */}
          <div className={cls.DashboardRow}>
            <Typography title='Most Recent:' size={TypographySize.M} />
            <div className={cls.DashboardGrid}>
              <div className={cls.DashboardTile}>
                <Typography
                  title='Most Recent Impressions'
                  size={TypographySize.S}
                />
                <Typography title={mostRecentImpressions.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography
                  title='Most Recent Clicks'
                  size={TypographySize.S}
                />
                <Typography title={mostRecentClicks.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography title='Most Recent CTR' size={TypographySize.S} />
                <Typography title={mostRecentCtr.toString()} />
              </div>
              <div className={cls.DashboardTile}>
                <Typography title='Most Recent Users' size={TypographySize.S} />
                <Typography title={mostRecentUsers.toString()} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Typography
          align={TypographyAlign.CENTER}
          title='No dashboard results found'
        />
      )}
    </Page>
  );
};

export default DashboardPage;
