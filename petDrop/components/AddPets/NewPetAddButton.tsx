import * as React from "react";
import { Dimensions, KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import styles from '../../styles/NewPetAddButton.styles';
import { Color } from '../../GlobalStyles';
import { useEffect, useState } from "react";
import Selection from 'react-native-select-dropdown';
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import { formatPhoneDisplay, normalizePhoneInput } from '../../utils/validationUtils';

export type FieldConfig = {
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  isPhone?: boolean;
};

export type NewPetAddButtonType = {
  innerText: string;
  initialValue: string;
  inputFieldsSetter: Function;
  options?: string[];
  fieldConfig?: FieldConfig;
  showLabel?: boolean;
  alignRightWhenNoLabel?: boolean;
};

const NewPetAddButton = ({ innerText, initialValue, inputFieldsSetter, options, fieldConfig, showLabel, alignRightWhenNoLabel }: NewPetAddButtonType) => {
  const [input, setInput] = useState(initialValue);
  const { height } = Dimensions.get('window');

  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);

  const wrapWithLabel = (content: React.ReactNode) => {
    if (showLabel) {
      const labelText = innerText.charAt(0).toUpperCase() + innerText.slice(1);
      return (
        <View style={styles.fieldRow}>
          <Text style={styles.fieldLabel}>{labelText}</Text>
          <View style={styles.inputInRow}>{content}</View>
        </View>
      );
    }
    if (alignRightWhenNoLabel) {
      return (
        <View style={styles.fieldRow}>
          <View style={styles.labelSpacer} />
          <View style={styles.inputInRow}>{content}</View>
        </View>
      );
    }
    return content;
  };

  if (options) {
    const selectedIndex = options.findIndex((opt) => opt.toLowerCase() === initialValue.toLowerCase());
    const dropdown = (
      <Selection
        data={options}
        defaultValueByIndex={selectedIndex >= 0 ? selectedIndex : undefined}
        onSelect={(selectedItem: string) => {
          setInput(selectedItem);
          inputFieldsSetter(innerText, selectedItem);
        }}
        renderButton={(selectedItem: string) => (
          <View style={[styles.textInput, styles.dropdownButton, showLabel && styles.inputInRow]}>
            <Text style={styles.dropdownText} numberOfLines={1}>
              {selectedItem ? selectedItem : `Select ${innerText}`}
            </Text>
            <DropdownArrow width={19} height={12} />
          </View>
        )}
        renderItem={(selectedItem: string, _index: number, isSelected: boolean) => (
          <View style={[styles.dropdownItem, isSelected && styles.dropdownItemSelected]}>
            <Text style={[styles.dropdownText, isSelected && styles.dropdownItemTextSelected]}>
              {selectedItem}
            </Text>
          </View>
        )}
        dropdownStyle={{
          marginTop: height * -0.01,
          borderWidth: 2,
          borderColor: Color.colorCornflowerblue,
          borderRadius: 14,
          maxHeight: height * 0.25,
        }}
      />
    );
    return wrapWithLabel(dropdown);
  }

  const isPhone = fieldConfig?.isPhone ?? false;
  const displayValue = isPhone ? formatPhoneDisplay(initialValue) : initialValue;
  const keyboardType = fieldConfig?.keyboardType;
  const multiline = fieldConfig?.multiline ?? true;

  const handleChangeText = (text: string) => {
    if (isPhone) {
      const digits = normalizePhoneInput(text);
      inputFieldsSetter(innerText, digits);
    } else {
      inputFieldsSetter(innerText, text);
    }
  };

  const textInput = (
    <TextInput
      style={[styles.textInput, showLabel && styles.inputInRow]}
      placeholder={`Enter ${innerText}`}
      placeholderTextColor='#A9A9A9'
      multiline={multiline}
      keyboardType={keyboardType}
      autoCapitalize={keyboardType === 'email-address' ? 'none' : undefined}
      value={displayValue}
      onChangeText={handleChangeText}
    />
  );
  return wrapWithLabel(textInput);
};

export default NewPetAddButton;