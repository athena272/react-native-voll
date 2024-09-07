import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './@types'
import Login from './pages/Login'
import Register from './pages/Register/indext'
import Home from './pages/Home'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}