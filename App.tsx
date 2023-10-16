import { ThemeProvider } from 'styled-components/native';
import themeDefault from '@themes/default';
import { Routes } from '@routes/index';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { FilterContextProvider } from '@contexts/FilterContext';
import { translate } from '@locales/index';

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <FilterContextProvider>
        <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
          <Routes />
        </SafeAreaView>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

window.translate = translate;
