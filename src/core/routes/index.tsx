import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from '@screens/LandingScreen';
import { BreweryDetailsScreen } from '@screens/BreweryDetailsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='LandingScreen'>
        <Screen name='LandingScreen' component={LandingScreen} />
        <Screen name='BreweryDetails' component={BreweryDetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
