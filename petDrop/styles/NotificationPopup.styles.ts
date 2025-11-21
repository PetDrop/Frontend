import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
      // Modal styles for NotificationPopup
      modalBackground: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          elevation: 1000,
      },
      modalContainer: {
          backgroundColor: 'white',
          borderRadius: width * 0.05,
          padding: width * 0.05,
          width: '90%',
          maxWidth: width * 1.0,
          minHeight: height * 0.8,
          maxHeight: '90%',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: height * 0.0025 },
          shadowOpacity: 0.25,
          shadowRadius: width * 0.01,
          elevation: 5,
          justifyContent: 'flex-start',
          position: 'relative',
      },
      titleText: {
          fontSize: FontSize.size_5xl,
          fontFamily: FontFamily.koulenRegular,
          color: Color.colorCornflowerblue,
      },
      scrollContainer: {
          width: '100%',
          flex: 1,
      },
      scrollContent: {
          paddingBottom: height * 0.02,
      },
      closeButton: {
          position: 'absolute',
          top: height * 0.012,
          right: width * 0.025,
          zIndex: 1,
          padding: width * 0.02
      },
      closeIcon: {
          width: width * 0.06,
          height: height * 0.03
      },
      actionsContainer: {
          width: '100%',
          flexDirection: 'row',
          marginTop: height * 0.02,
          justifyContent: 'space-between',
      },
      saveButtonWrapper: {
          flex: 1,
      },
      deleteButtonWrapper: {
          flex: 1,
          marginLeft: width * 0.05,
      },
      buttonContainer: {
          marginTop: height * 0.012,
          width: '100%'
      },
});

export default styles;