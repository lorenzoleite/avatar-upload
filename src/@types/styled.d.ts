import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;

      'gray.600': string;
      'gray.500': string;
      'gray.400': string;
      'gray.300': string;
      'gray.200': string;
      'gray.100': string;

      'blue.200': string;
      'blue.100': string;

      'orange.100': string;
    };
    font: {
      family: { inter: string };
      weight: {
        normal: number;
        medium: number;
      };
      size: {
        small: string;
        medium: string;
      };
      lineHeight: {
        small: string;
        medium: string;
      };
    };
    border: {
      small: string;
      medium: string;
    };
  }
}
