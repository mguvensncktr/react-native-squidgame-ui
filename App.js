import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/router';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Router />
  )
};

