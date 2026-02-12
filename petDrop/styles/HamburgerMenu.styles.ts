import { Dimensions, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: height * 0.06,
        left: width * 0.85,
        zIndex: 101,
    },
    menuContainer: {
        position: 'absolute',
        width: width * 0.5,
        height: height * 2,
        backgroundColor: Color.colorLightskyblue,
        top: height * -0.5,
        paddingTop: height * 0.6,
        paddingHorizontal: width * 0.0513,
        zIndex: 100,
        elevation: 100,
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
    modalContainer: {
        flex: 1,
        position: 'relative',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    backdropOverlay: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});

export default styles;