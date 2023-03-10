import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login/index'
import HomeScreen from './src/screens/HomeScreen/index'
import AboutScreen from './src/screens/About/index'
import UserDetails from './src/screens/UserDetails/index'
import { NavigationContainer, useRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}