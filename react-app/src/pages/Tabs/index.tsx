import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from './@types'
import { tabs } from './@types';

const Stack = createBottomTabNavigator<RootStackParamList>()

export default function Tabs() {

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#002851'
                },
                tabBarActiveTintColor: "#339cff",
                tabBarInactiveTintColor: "#fff",
                tabBarShowLabel: false,
            }}
        >
            {
                tabs.map((tab, index) => (
                    <Stack.Screen
                        key={index}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <tab.iconComponent name={tab.icon} size={size} color={color} />
                            )
                        }}
                    />
                ))
            }
        </Stack.Navigator>
    )
}