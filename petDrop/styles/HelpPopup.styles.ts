import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        elevation: 10000,
    },
    modalContainer: {
        backgroundColor: Color.colorWhite,
        borderRadius: width * 0.05,
        padding: width * 0.05,
        width: '90%',
        maxWidth: width * 1.25,
        maxHeight: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: height * 0.0025 },
        shadowOpacity: 0.25,
        shadowRadius: width * 0.01,
        elevation: 10001,
        justifyContent: 'flex-start',
        zIndex: 10001,
    },
    closeButton: {
        position: 'absolute',
        top: height * 0.012,
        right: width * 0.025,
        padding: width * 0.02,
    },
    closeIcon: {
        width: width * 0.06,
        height: height * 0.03,
    },
    titleText: {
        fontSize: FontSize.size_5xl,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
        marginTop: height * 0.025,
        marginBottom: height * 0.02,
        textAlign: 'center',
    },
    scrollContainer: {
        width: '100%',
        maxHeight: height * 0.5,
    },
    helpText: {
        fontSize: FontSize.size_base,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
        lineHeight: FontSize.size_base * 1.5,
        paddingHorizontal: width * 0.02,
    },
});

export default styles;

