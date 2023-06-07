import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import themeDefault from '@themes/default';

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <View style={styles.container}>
        <Text>Eai krl!!</Text>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
