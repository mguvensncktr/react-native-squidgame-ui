import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    image: {
        width: Dimensions.get('window').width - 30,
        height: 190,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    container: {
        margin: 15,
    },

})

export default styles;
