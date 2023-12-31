/**
 * Global directive of types
 */
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const SVG: (props: SVGProps<SVGElement>) => ReactElement;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend';
