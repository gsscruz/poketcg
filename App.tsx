import { Home } from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselCards from './src/components/carouselcarditem/CarouselCards';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TCG' component={CarouselCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
