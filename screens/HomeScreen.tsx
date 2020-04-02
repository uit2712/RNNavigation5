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
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamsList, FirstScreenParams } from '../App';

type HomeScreenNavigationProp = NavigationProp<RootStackParamsList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamsList, 'Home'>;

function HomeScreen({
    navigation,
    route,
}: {
    navigation: HomeScreenNavigationProp,
    route: HomeScreenRouteProp,
}) {
    // const navigation = useNavigation<HomeScreenNavigationProp>();
    const params: FirstScreenParams = {
        message: 'Hello mate :)',
        id: 123456
    };

    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title='Navigate to First screen'
                onPress={() => navigation.navigate('First', params)}
            />
            <Button
                title='Update title'
                onPress={() => navigation.setParams({
                    title: 'Hihihi'
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;
