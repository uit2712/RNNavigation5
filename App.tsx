/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';

// list all screens (parameters)
export type HomeScreenParams = {
    title?: string;
}

export type FirstScreenParams = {
    title?: string;
    message: string;
    id: number;
}

export type RootStackParamsList = {
    Home: HomeScreenParams;
    First: FirstScreenParams;
}

const Stack = createStackNavigator<RootStackParamsList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='First'
                    component={FirstScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    
});

export default App;
