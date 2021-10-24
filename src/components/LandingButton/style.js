import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bottom: 10,
        width: 350,
        height: 50,
        borderRadius: 50,
        alignSelf: 'center'
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#a8a8a8',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 12,
    }
})

export default styles;
