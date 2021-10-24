import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import CategoryList from '../CategoryList';

const Header = () => {
    return (
        <View>
            <Image source={require('../../assets/images/headerbg.jpg')} style={styles.image} />
            <Entypo name="dots-three-horizontal" size={20} color="white" style={styles.dots} />
            <CategoryList />
        </View>
    )
}

export default Header
