import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen'
import LandingScreen from '../Screens/LandingScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Landing" >
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: 'black' }, tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'red' }} >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <FontAwesome name="envelope-o" size={24} color={color} /> }} />
            <Tab.Screen name="Messages" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart-pulse" size={26} color={color} /> }} />
            <Tab.Screen name="Fav" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={50} color={color} /> }} />
            <Tab.Screen name="Add" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} /> }} />
            <Tab.Screen name="Profile" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} />
        </Tab.Navigator>
    )
}


export default Router;