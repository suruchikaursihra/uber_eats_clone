import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screensOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screensOptions={screensOptions}>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
