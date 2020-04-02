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
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../App';

type FirstScreenRouteProp = RouteProp<RootStackParamsList, 'First'>;

function FirstScreen({
    route
}: {
    route: FirstScreenRouteProp,
}) {
    // const route = useRoute<FirstScreenRouteProp>();
    const params = route.params;

    return (
        <View>
            <Text>First screen</Text>
            <Text>Message: {params.message}</Text>
            <Text>Id: {params.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default FirstScreen;
