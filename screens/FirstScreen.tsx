/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../App';
import { Button } from 'react-native';
import { ToastAndroid } from 'react-native';

type FirstScreenRouteProp = RouteProp<RootStackParamsList, 'First'>;

function FirstScreen({
    route
}: {
    route: FirstScreenRouteProp,
}) {
    // const route = useRoute<FirstScreenRouteProp>();
    const navigation = useNavigation();
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title='Right button'
                    onPress={() => ToastAndroid.show('Right button pressed', ToastAndroid.SHORT)}
                />
            ),
        })
    }, [navigation]);

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
