import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
        marginBottom: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center',
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        textAlign: 'center',
        fontSize: 15,
        margin: 10,
        color: '#333',
        borderRadius: 5,
        flex: 1,
    },
    button: {
        backgroundColor: '#00cc99',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fdfdfd',
    },
    item: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemView: {
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        marginBottom: 100,
    },
    iconDelete: {
        borderColor: '#000000',
        padding: 10,
        borderTopWidth: 5,
        marginTop: 20,
    },
    itemDelete: {
        width: 45,
        height: 45,
        margin: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#dcdcdc',
    },
    form: {
        flexDirection: 'row',
    },
});

export default styles;