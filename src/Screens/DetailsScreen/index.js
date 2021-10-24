import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './style'
const DetailsScreen = () => {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.gameHeader}>{route.params.name}</Text>
            </View>
            <Image source={route.params.imageUri} style={styles.image} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Game Description</Text>
            <ScrollView style={styles.desc}>
                <Text style={styles.descText}>{route.params.desc}</Text>
            </ScrollView>
        </View>
    )
}

export default DetailsScreen
