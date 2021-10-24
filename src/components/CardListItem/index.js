import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import { useNavigation } from '@react-navigation/native'

const CardListItem = ({ props }) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Details', { id: props.id, imageUri: props.imageUri, name: props.name, desc: props.desc });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} >
                <Image source={props.imageUri} style={styles.image} />
            </TouchableOpacity>
        </View >
    )
}

export default CardListItem
