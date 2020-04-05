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
    Button,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FirstScreenParams, RootTabParamsList } from '../App';

type SettingsScreenNavigationProp = NavigationProp<RootTabParamsList, 'Settings'>;

function SettingsScreen() {
    const navigation = useNavigation<SettingsScreenNavigationProp>();

    const params: FirstScreenParams = {
        message: 'Hello from Settings tab',
        id: 123456789
    }

    return (
        <View>
            <Text>Settings screen</Text>
            <Button
                title='Navigate to tab Home'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='Navigate to tab Home, to First screen'
                onPress={() => navigation.navigate('Home', {
                    screen: 'First',
                    params
                })}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    
});

export default SettingsScreen;
