import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import AboutScreen from './src/screens/About'
import UserDetails from './src/screens/UserDetails'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}