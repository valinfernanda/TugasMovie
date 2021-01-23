import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import GetStarted from '../GetStarted';
import Movie1 from '../Movie1';
import Movie2 from '../Movie2';
import Movie3 from '../Movie3';
import Movie4 from '../Movie4';
import Movie5 from '../Movie5';
import Movie6 from '../Movie6';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="Movie1" component={Movie1} options={{headerShown: false}}/>
            <Stack.Screen name="Movie2" component={Movie2} options={{headerShown: false}}/>
            <Stack.Screen name="Movie3" component={Movie3} options={{headerShown: false}}/>
            <Stack.Screen name="Movie4" component={Movie4} options={{headerShown: false}}/>
            <Stack.Screen name="Movie5" component={Movie5} options={{headerShown: false}}/>
            <Stack.Screen name="Movie6" component={Movie6} options={{headerShown: false}}/>
            
        </Stack.Navigator>
    )
}

export default Router;

const styles = StyleSheet.create({})
