import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style';
import categories from '../../data/categoriesData/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const CategoryList = () => {

    const [categoryIndex, setCategoryIndex] = useState(0);

    return (
        <View style={styles.container}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)} >
                    <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]} key={index} >{item}</Text>
                </TouchableOpacity>
            ))}
            <View style={styles.filterIcon}>
                <MaterialCommunityIcons name="filter-variant-plus" size={24} color="white" />
            </View>
        </View>
    )
}

export default CategoryList
