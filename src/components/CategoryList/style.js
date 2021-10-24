import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        alignItems: 'center'
    },
    categoryText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#a8a8a8',
    },
    categoryTextSelected: {
        color: 'white',
        borderWidth: 0.8,
        borderColor: 'red',
        borderRadius: 5,
    },
    filterIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 10
    }

})

export default styles;
