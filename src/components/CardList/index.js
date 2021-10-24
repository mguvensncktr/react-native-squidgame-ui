import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CardListItem from '../CardListItem'
import gameData from '../../data/gamesData/index';
import Header from '../Header';


const CardList = () => {

    return (
        <View>
            <FlatList
                data={gameData}
                renderItem={({ item }) => <CardListItem props={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={Header}
            />
        </View>
    )
}

export default CardList
