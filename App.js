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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';

const Stack = createStackNavigator();

function App() {
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
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    
});

export default App;
