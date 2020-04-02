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

function HomeScreen() {
    const navigation = useNavigation();
    const params = {
        message: 'Hello mate :)))',
        id: 123456
    }

    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title='Navigate to First screen'
                onPress={() => navigation.navigate('First', params)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;
