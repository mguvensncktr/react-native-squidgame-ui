import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import LandingButton from '../../components/LandingButton'
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Root')}>
            <Image style={styles.image} source={require('../../assets/images/landingbg.png')} />
            <LandingButton />
        </TouchableOpacity>
    )
}

export default LandingScreen
