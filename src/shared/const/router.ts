export enum AppRoutes {
  CAMPAIGNS = 'campaigns',
  DASHBOARD = 'about',
  NOT_FOUND = 'not_found',
}

export const getRouteCampaigns = () => '/';
export const getRouteDashboard = (id: string) => `/dashboard/${id}`;
