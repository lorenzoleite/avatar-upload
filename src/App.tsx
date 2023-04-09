import { ThemeProvider } from 'styled-components';

import { theme } from './themes/theme';
import { GlobalStyle } from './styles/global';
import { Wrapper } from './components/Wrapper';
import { AvatarUpload } from './components/AvatarUpload';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <AvatarUpload />
      </Wrapper>
    </ThemeProvider>
  );
}
