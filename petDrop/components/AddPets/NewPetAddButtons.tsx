import * as React from "react";
import { Dimensions, View } from "react-native";
import NewPetAddButton, { FieldConfig } from "./NewPetAddButton";
import styles from '../../styles/NewPetAddButtons.styles';

const { width } = Dimensions.get('window');

type NewPetAddButtonsProps = {
  inputFields: Map<string, string>;
  inputFieldsSetter: Function;
  optionsForField?: Record<string, string[]>;
  fieldConfig?: Record<string, FieldConfig>;
  showLabels?: boolean;
  labelExcludeKey?: string;
}

const NewPetAddButtons = ({ inputFields, inputFieldsSetter, optionsForField, fieldConfig, showLabels, labelExcludeKey }: NewPetAddButtonsProps) => {
  return (
    <View style={[
      styles.newPetButtonGroupParent,
      showLabels && { width: '100%' },
    ]}>
      {Array.from(inputFields.keys()).map((key: string, index: number) => {
        let initialValue = inputFields.get(key);
        // console.log(initialValue);
        if (initialValue === undefined) {
          initialValue = '';
        }
        const options = optionsForField?.[key];
        const config = fieldConfig?.[key];
        const showLabel = showLabels && key !== labelExcludeKey;
        const alignRightWhenNoLabel = showLabels && key === labelExcludeKey;
        return (
          <NewPetAddButton
            innerText={key}
            initialValue={initialValue}
            inputFieldsSetter={inputFieldsSetter}
            options={options}
            fieldConfig={config}
            showLabel={showLabel}
            alignRightWhenNoLabel={alignRightWhenNoLabel}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default NewPetAddButtons;