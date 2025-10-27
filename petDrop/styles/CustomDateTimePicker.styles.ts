import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: width * 0.05,
        padding: width * 0.05,
        marginHorizontal: width * 0.05,
        maxHeight: '80%',
        minHeight: '60%'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: height * 0.025,
        textAlign: 'center'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    pickerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    wheelPickerContainer: {
        flex: 1,
        marginHorizontal: width * 0.0125
    },
    wheelPickerLabel: {
        textAlign: 'center',
        marginBottom: height * 0.0125,
        fontWeight: 'bold'
    },
    wheelPickerScroll: {
        height: 300,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: width * 0.02
    },
    wheelPickerItem: {
        padding: 15,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        minHeight: 50
    },
    wheelPickerItemSelected: {
        backgroundColor: '#007AFF'
    },
    wheelPickerItemText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    },
    wheelPickerItemTextSelected: {
        color: 'white'
    },
    ampmContainer: {
        flex: 1,
        marginHorizontal: width * 0.0125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ampmTextContainer: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ampmText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    ampmTextActive: {
        color: '#007AFF'
    },
    ampmTextInactive: {
        color: '#666'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: height * 0.025
    },
    button: {
        padding: 10
    },
    buttonText: {
        color: 'blue'
    }
});

export default styles;

