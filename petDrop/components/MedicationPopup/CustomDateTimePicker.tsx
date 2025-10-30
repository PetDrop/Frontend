import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Modal, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles/CustomDateTimePicker.styles';

type CustomDateTimePickerProps = {
  isVisible: boolean;
  mode: 'date' | 'time';
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  initialDate?: Date;
};

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  isVisible,
  mode,
  onConfirm,
  onCancel,
  initialDate = new Date()
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth() + 1);
  const [day, setDay] = useState(selectedDate.getDate());
  const [hour, setHour] = useState(() => {
    const h = selectedDate.getHours();
    return h === 0 ? 12 : h > 12 ? h - 12 : h;
  });
  const [minute, setMinute] = useState(selectedDate.getMinutes());
  const [hourSet, setHourSet] = useState(() => {
    const h = selectedDate.getHours();
    return h < 12 ? 0 : 1; // 0 for first set (AM), 1 for second set (PM)
  });

  const handleConfirm = () => {
    const newDate = mode === 'date' 
      ? new Date(year, month - 1, day)
      : new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 
          hourSet === 0 ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12), minute);
    setSelectedDate(newDate);
    onConfirm(newDate);
  };

  const generateDays = () => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const WheelPicker = ({ items, selectedValue, onValueChange, label }: { items: any[], selectedValue: any, onValueChange: (value: any) => void, label: string }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    
    const scrollToSelected = () => {
      const selectedIndex = items.findIndex(item => {
        if (typeof selectedValue === 'object' && selectedValue !== null) {
          return item.value.hour === selectedValue.hour && item.value.set === selectedValue.set;
        }
        return item.value === selectedValue;
      });
      if (selectedIndex !== -1 && scrollViewRef.current) {
        // Center the selected item in the visible area
        const containerHeight = styles.wheelPickerScroll.height;
        const visibleItems = Math.floor(containerHeight / styles.wheelPickerItem.minHeight);
        const centerOffset = (visibleItems - 1) / 2;
        const targetY = Math.max(0, (selectedIndex - centerOffset) * styles.wheelPickerItem.minHeight);
        
        scrollViewRef.current.scrollTo({
          y: targetY,
          animated: true
        });
      }
    };

    const isSelected = (item: any) => {
      if (typeof selectedValue === 'object' && selectedValue !== null) {
        return item.value.hour === selectedValue.hour && item.value.set === selectedValue.set;
      }
      return item.value === selectedValue;
    };

    return (
      <View style={styles.wheelPickerContainer}>
        <Text style={styles.wheelPickerLabel}>{label}</Text>
        <ScrollView 
          ref={scrollViewRef}
          style={styles.wheelPickerScroll}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={scrollToSelected}
          onLayout={scrollToSelected}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onValueChange(item.value)}
              style={[
                styles.wheelPickerItem,
                isSelected(item) && styles.wheelPickerItemSelected
              ]}
            >
              <Text style={[
                styles.wheelPickerItemText,
                isSelected(item) && styles.wheelPickerItemTextSelected
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            Select {mode === 'date' ? 'Date' : 'Time'}
          </Text>
          
          <View style={styles.contentContainer}>
            <View style={styles.pickerRow}>
              {mode === 'date' ? (
                <>
                  <WheelPicker
                    items={Array.from({ length: 12 }, (_, i) => ({ 
                      value: i + 1, 
                      label: (i + 1).toString().padStart(2, '0') 
                    }))}
                    selectedValue={month}
                    onValueChange={setMonth}
                    label="Month"
                  />
                  <WheelPicker
                    items={generateDays().map(d => ({ 
                      value: d, 
                      label: d.toString().padStart(2, '0') 
                    }))}
                    selectedValue={day}
                    onValueChange={setDay}
                    label="Day"
                  />
                  <WheelPicker
                    items={Array.from({ length: 10 }, (_, i) => ({ 
                      value: new Date().getFullYear() + i, 
                      label: (new Date().getFullYear() + i).toString() 
                    }))}
                    selectedValue={year}
                    onValueChange={setYear}
                    label="Year"
                  />
                </>
              ) : (
                <>
                  <WheelPicker
                    items={[
                      // First set (AM): 12, 1, 2, ..., 11
                      ...Array.from({ length: 12 }, (_, i) => ({ 
                        value: { hour: i === 0 ? 12 : i, set: 0 }, 
                        label: (i === 0 ? 12 : i).toString() 
                      })),
                      // Second set (PM): 12, 1, 2, ..., 11
                      ...Array.from({ length: 12 }, (_, i) => ({ 
                        value: { hour: i === 0 ? 12 : i, set: 1 }, 
                        label: (i === 0 ? 12 : i).toString() 
                      }))
                    ]}
                    selectedValue={{ hour, set: hourSet }}
                    onValueChange={(value) => {
                      setHour(value.hour);
                      setHourSet(value.set);
                    }}
                    label="Hour"
                  />
                  <WheelPicker
                    items={Array.from({ length: 60 }, (_, i) => ({ 
                      value: i, 
                      label: i.toString().padStart(2, '0') 
                    }))}
                    selectedValue={minute}
                    onValueChange={setMinute}
                    label="Minute"
                  />
                  <View style={styles.ampmContainer}>
                    <Text style={styles.wheelPickerLabel}>AM/PM</Text>
                    <View style={styles.ampmTextContainer}>
                      <Text style={[styles.ampmText, hourSet === 0 ? styles.ampmTextActive : styles.ampmTextInactive]}>
                        {hourSet === 0 ? 'AM' : 'PM'}
                      </Text>
                    </View>
                  </View>
                </>
              )}
            </View>
            
            <View style={styles.buttonRow}>
              <Pressable onPress={onCancel} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleConfirm} style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
