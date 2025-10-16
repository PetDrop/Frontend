import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Modal, ScrollView, TouchableOpacity } from 'react-native';

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
  const [isAM, setIsAM] = useState(selectedDate.getHours() < 12);

  const handleConfirm = () => {
    const newDate = mode === 'date' 
      ? new Date(year, month - 1, day)
      : new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 
          isAM ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12), minute);
    setSelectedDate(newDate);
    onConfirm(newDate);
  };

  const generateDays = () => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const WheelPicker = ({ items, selectedValue, onValueChange, label }: { items: any[], selectedValue: any, onValueChange: (value: any) => void, label: string }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const itemHeight = 50; // Height of each item (15 padding top + 15 padding bottom + ~20 text height)
    
    const scrollToSelected = () => {
      const selectedIndex = items.findIndex(item => item.value === selectedValue);
      if (selectedIndex !== -1 && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: selectedIndex * itemHeight,
          animated: true
        });
      }
    };

    return (
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>{label}</Text>
        <ScrollView 
          ref={scrollViewRef}
          style={{ height: 300, borderWidth: 1, borderColor: '#ddd', borderRadius: 8 }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={scrollToSelected}
          onLayout={scrollToSelected}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onValueChange(item.value)}
              style={{
                padding: 15,
                backgroundColor: selectedValue === item.value ? '#007AFF' : 'transparent',
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
                minHeight: itemHeight
              }}
            >
              <Text style={{
                textAlign: 'center',
                fontSize: 18,
                color: selectedValue === item.value ? 'white' : 'black'
              }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginHorizontal: 20, maxHeight: '80%', minHeight: '60%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
            Select {mode === 'date' ? 'Date' : 'Time'}
          </Text>
          
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
                    items={Array.from({ length: 12 }, (_, i) => ({ 
                      value: i + 1, 
                      label: (i + 1).toString() 
                    }))}
                    selectedValue={hour}
                    onValueChange={setHour}
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
                  <WheelPicker
                    items={[
                      { value: true, label: 'AM' },
                      { value: false, label: 'PM' }
                    ]}
                    selectedValue={isAM}
                    onValueChange={setIsAM}
                    label="AM/PM"
                  />
                </>
              )}
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Pressable onPress={onCancel} style={{ padding: 10 }}>
                <Text style={{ color: 'blue' }}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleConfirm} style={{ padding: 10 }}>
                <Text style={{ color: 'blue' }}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
