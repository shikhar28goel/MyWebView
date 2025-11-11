import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screen/Login/WebViewScreen';
import Splash from '../../Screen/Splash/Splash';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WebView"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
