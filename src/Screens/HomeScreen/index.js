import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import Feed from '../../components/Feed'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Feed />
        </View>
    )
}

export default HomeScreen
