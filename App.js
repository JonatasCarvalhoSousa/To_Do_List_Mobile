import ListItem from './src/components/ListItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Lista To do" component={ListItem} />      
      </Stack.Navigator>    
    </NavigationContainer>

  );
}

