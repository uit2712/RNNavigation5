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
    ToastAndroid,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import { Button } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
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
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' }}
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                            <Text>{route.params.title ? route.params.title : route.name}</Text>
                        </View>
                    ),
                    headerTitleAlign: 'center',
                    headerBackImage: ({ tintColor }) => (
                        <AntDesignIcon
                            name='leftcircle'
                            size={25}
                            color={tintColor}
                        />
                    ),
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
                        headerRight: () => (
                            <Button
                                title='Right button'
                                onPress={() => ToastAndroid.show('Right button pressed', ToastAndroid.SHORT)}
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tab = createBottomTabNavigator();
function TabComponent() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: 'deeppink',
                    activeTintColor: 'white',
                    inactiveBackgroundColor: 'white',
                    inactiveTintColor: 'deeppink'
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) =>
                            <AntDesignIcon
                                name='home'
                                size={25}
                                color={color}
                            />
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color }) =>
                            <FeatherIcon
                                name='settings'
                                size={25}
                                color={color}
                            />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    
});

export default TabComponent;
