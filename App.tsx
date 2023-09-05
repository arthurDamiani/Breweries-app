import { ThemeProvider } from 'styled-components/native';
import themeDefault from '@themes/default';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Routes />
    </ThemeProvider>
  );
}
