import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './Typography.module.scss';

export enum TypographyAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TypographySize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TypographyAlign;
  size?: TypographySize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TypographySize, HeaderTagType> = {
  [TypographySize.S]: 'h3',
  [TypographySize.M]: 'h2',
  [TypographySize.L]: 'h1',
};

export const Typography = (props: TypographyProps) => {
  const {
    className,
    title,
    text,
    align = TypographyAlign.LEFT,
    size = TypographySize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.Typography, {}, [
        className,
        cls[align],
        cls[size],
      ])}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
