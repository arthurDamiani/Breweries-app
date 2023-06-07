/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from 'src/shared/styles/themes/default';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
