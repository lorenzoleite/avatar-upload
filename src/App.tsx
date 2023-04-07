import { ThemeProvider } from 'styled-components';

import { theme } from './themes/theme';
import { GlobalStyle } from './styles/global';
import { Container } from './components/Container';
import { AvatarUpload } from './components/AvatarUpload';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <AvatarUpload />
      </Container>
    </ThemeProvider>
  );
}
