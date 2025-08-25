import { Dimensions, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: height * 0.06,
        left: width * 0.85,
    },
    menuContainer: {
        position: 'absolute',
        width: width * 0.5,
        height: height * 2,
        backgroundColor: Color.colorGainsboro_100,
        top: height * -0.5,
        paddingTop: height * 0.6,
        paddingHorizontal: width * 0.0513,
        zIndex: 100,
    },
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.0237,
    },
    menuTitle: {
        fontFamily: FontFamily.koulenRegular,
        fontSize: FontSize.size_27,
        fontWeight: 'bold',
        top: height * -0.01,
    },
    menuItem: {
        paddingTop: height * 0.03,
        paddingBottom: height * 0.015,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    menuText: {
        fontFamily: FontFamily.juaRegular,
        fontSize: FontSize.size_lg,
    },
});

export default styles;