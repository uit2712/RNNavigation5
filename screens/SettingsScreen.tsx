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
        </View>
        
    );
};

const styles = StyleSheet.create({
    
});

export default SettingsScreen;
