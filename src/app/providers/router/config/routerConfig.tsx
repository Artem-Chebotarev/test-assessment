import { RouteProps } from 'react-router-dom';

import { CampaignsPage } from '@/pages/CampaignsPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  AppRoutes,
  getRouteCampaigns,
  getRouteDashboard,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CAMPAIGNS]: {
    path: getRouteCampaigns(),
    element: <CampaignsPage />,
  },
  [AppRoutes.DASHBOARD]: {
    path: getRouteDashboard(':id'),
    element: <DashboardPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
