import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import ScreenSplash from './screens/ScreenSplash';

const Stack = createNativeStackNavigator();

export default function Appp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenSplash"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Screen1' component={Screen1} />
                <Stack.Screen name='Screen2' component={Screen2} />
                <Stack.Screen name='Screen3' component={Screen3} />
                <Stack.Screen name='ScreenSplash' component={ScreenSplash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


