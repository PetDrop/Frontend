import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Polygon6 from "../assets/dropdown_arrow.svg";
import Ellipse17 from "../assets/blue_circle_small.svg";
import styles from '../styles/MedicationPopup.styles';

type MedicationPopupProps = {
  isActive: boolean;
};

const MedicationPopup = ({isActive}: MedicationPopupProps) => {
  if (isActive) { 
    return (
    <View style={{position: "absolute"}}>
      <View style={styles.opaqueBackground} />
			<View style={styles.medPopupContainer}>
        <View style={styles.medicationPopup}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <View style={styles.groupItem} />
            <Text style={styles.exDosageTake}>
              ex. dosage, take with food, etc...
            </Text>
            <View style={styles.groupInner} />
            <View style={styles.rectangleGroup}>
              <View style={styles.rectangleView} />
              <Text style={[styles.save, styles.saveTypo]}>{`SAVE
    `}</Text>
            </View>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/remove_x_white.png")}
            />
            <Text style={[styles.medication, styles.saveTypo]}>Medication</Text>
            <View style={styles.groupChild1} />
            <Text style={[styles.datesSeptember19, styles.textTypo]}>{`Dates:
    September 19

    Notifications: 

    Message: 
    `}</Text>
            <Text style={[styles.text, styles.textTypo]}>
              {`09 `}/{`19 `}/25
            </Text>
            <Polygon6 style={styles.polygonIcon} width={19} height={12} />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Ellipse17
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                width={22}
                height={22}
              />
              <View style={styles.rectangleContainer}>
                <View style={styles.groupChild2} />
                <View style={styles.groupChildPosition} />
              </View>
            </View>
            <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
              <Ellipse17
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                width={22}
                height={22}
              />
              <View style={styles.rectangleContainer}>
                <View style={styles.groupChild2} />
                <View style={styles.groupChildPosition} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
  }
};

export default MedicationPopup;
