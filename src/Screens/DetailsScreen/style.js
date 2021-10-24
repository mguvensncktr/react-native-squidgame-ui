import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    headerContainer: {
        margin: 20
    },
    gameHeader: {
        color: 'white',
        fontSize: 30,
        marginTop: 10
    },

    image: {
        width: Dimensions.get('window').width,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 100
    },
    desc: {
        width: '100%',
    },
    descText: {
        color: 'white',
        fontSize: 16
    }
})

export default styles;
