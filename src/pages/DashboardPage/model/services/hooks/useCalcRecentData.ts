import { useMemo } from 'react';

import { TDashboardData } from '@/shared/types/dashboard';

export const useCalcRecentData = (
  dashboardData: TDashboardData | null,
  prevDashboardData: TDashboardData | null,
) => {
  // Calculate Click Through Rate
  const ctr = useMemo(() => {
    if (!dashboardData) {
      return 0;
    }

    const { clicks, impressions } = dashboardData;

    return Math.round((clicks / impressions) * 100);
  }, [dashboardData]);

  // Calculate Most Recent Impressions
  const mostRecentImpressions = useMemo(() => {
    if (!prevDashboardData || !dashboardData) {
      return 0;
    }

    const { impressions } = dashboardData;
    const { impressions: prevImpressions } = prevDashboardData;

    return impressions - prevImpressions;
  }, [prevDashboardData, dashboardData]);

  // Calculate Most Recent Clicks
  const mostRecentClicks = useMemo(() => {
    if (!prevDashboardData || !dashboardData) {
      return 0;
    }

    const { clicks } = dashboardData;
    const { clicks: prevClicks } = prevDashboardData;

    return clicks - prevClicks;
  }, [prevDashboardData, dashboardData]);

  // Calculate Most Recent CTR
  const mostRecentCtr = useMemo(() => {
    if (!prevDashboardData) {
      return 0;
    }

    const { impressions: prevImpressions, clicks: prevClicks } =
      prevDashboardData;

    const prevCtr = Math.round((prevClicks / prevImpressions) * 100);

    return ctr - prevCtr;
  }, [prevDashboardData, ctr]);

  // Calculate Most Recent Users
  const mostRecentUsers = useMemo(() => {
    if (!prevDashboardData || !dashboardData) {
      return 0;
    }

    const { users } = dashboardData;
    const { users: prevUsers } = prevDashboardData;

    return users - prevUsers;
  }, [prevDashboardData, dashboardData]);

  return {
    ctr,
    mostRecentImpressions,
    mostRecentClicks,
    mostRecentCtr,
    mostRecentUsers,
  };
};
