import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './DashboardPage.module.scss';

interface DashboardPageProps {
  className?: string;
}

const DashboardPage = ({ className }: DashboardPageProps) => (
  <Page className={classNames(cls.DashboardPage, {}, [className])}>
    DashboardPage
  </Page>
);

export default DashboardPage;
