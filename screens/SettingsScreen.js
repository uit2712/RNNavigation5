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
import { useNavigation } from '@react-navigation/native';

function SettingsScreen() {
    const navigation = useNavigation();

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
                    params: {
                        title: 'First screen from tab Settings',
                        message: 'Hello from Settings tab',
                        id: 8888,
                    }
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default SettingsScreen;
