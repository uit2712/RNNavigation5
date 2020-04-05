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
    View,
    Image,
    Button,
    ToastAndroid,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';

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

function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerTitle: () => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image
                                source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/react-native-555397.png' }}
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                            />
                            <Text>{route.params.title}</Text>
                        </View>
                    ),
                    headerTitleAlign: 'center',
                    headerBackImage: ({ tintColor }) => (
                        <AntDesignIcon
                            name='leftcircle'
                            size={25}
                            color={tintColor}
                        />
                    )
                })}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    initialParams={{
                        title: 'Home Screen',
                    }}
                />
                <Stack.Screen
                    name='First'
                    component={FirstScreen}
                    initialParams={{
                        title: 'First Screen',
                    }}
                    options={{
                        // headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export type RootTabParamsList = {
    Home: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<RootTabParamsList>();
function TabComponent() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    
});

export default TabComponent;
