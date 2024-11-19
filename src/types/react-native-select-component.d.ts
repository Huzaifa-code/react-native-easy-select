declare module 'react-native-select-component' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle, TextStyle } from 'react-native';
  
    export interface SelectComponentProps {
      data: Array<{ label: string; value: string | number }>;
      onChange: (value: string | number, label: string) => void;
      defaultValue?: string | number;
      placeholder?: string;
      style?: StyleProp<ViewStyle>;
      textStyle?: StyleProp<TextStyle>;
      placeholderTextColor?: string;
      searchEnabled?: boolean;
    }
  
    export default class SelectComponent extends Component<SelectComponentProps> {}
}
  