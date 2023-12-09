import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Typography } from '@/shared/ui/Typography';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Typography className={cls.appName} text='Test assessment' />
    </header>
  );
};
