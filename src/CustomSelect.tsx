import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, ViewStyle } from 'react-native';

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  name: string;
  options: Option[];
  value: string;
  handleChange: (name: string, value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  fontSize?: number;
  triggerTextColor?: string;
  triggerBorderColor?: string;
  triggerBackgroundColor?: string;
  IconComponent?: React.ReactNode;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  options = [],
  value,
  handleChange,
  placeholder = 'Select an option',
  style = {},
  fontSize = 16,
  triggerTextColor = 'black',
  triggerBorderColor = 'gray',
  triggerBackgroundColor = '#fff',
  IconComponent
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (selectedValue: string) => {
    handleChange(name, selectedValue);
    setIsVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.trigger,
          { borderColor: triggerBorderColor, backgroundColor: triggerBackgroundColor },
        ]}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={[styles.triggerText, { fontSize, color: triggerTextColor }]}>
          {value ? options.find(opt => opt.value === value)?.label : placeholder}
        </Text>
        {IconComponent || null}
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  triggerText: {
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    width: '80%',
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomSelect;
