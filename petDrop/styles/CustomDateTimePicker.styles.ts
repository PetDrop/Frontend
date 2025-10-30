import { StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../GlobalStyles';

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
        fontSize: FontSize.size_lg,
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
        fontWeight: 'bold',
        fontSize: FontSize.size_base
    },
    wheelPickerScroll: {
        height: height * 0.4,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: width * 0.02
    },
    wheelPickerItem: {
        padding: height * 0.018,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        minHeight: height * 0.06
    },
    wheelPickerItemSelected: {
        backgroundColor: '#007AFF'
    },
    wheelPickerItemText: {
        textAlign: 'center',
        fontSize: FontSize.size_lg,
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
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ampmText: {
        fontSize: FontSize.size_5xl,
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
        padding: width * 0.025
    },
    buttonText: {
        color: 'blue',
        fontSize: FontSize.size_base
    }
});

export default styles;

