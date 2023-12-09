import SpinnerImg from '@/shared/assets/icons/spinner.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.LoaderWrapper, {}, [className])}>
      <div className={cls.LoaderBox}>
        <SpinnerImg />
      </div>
    </div>
  );
};
