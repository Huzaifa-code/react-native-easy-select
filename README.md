# react-native-select-component

A customizable and reusable `react-native-select-component` dropdown component for React Native.

This component provides a user-friendly way to select options in your app with the flexibility to pass your own styles, icons, and customization props.

---

## Installation

To install it from an npm package :

```bash
npm install react-native-select-component
```

---

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import CustomSelect from 'react-native-select-component';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <CustomSelect
        name="example"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        value={selectedValue}
        handleChange={(name, value) => setSelectedValue(value)}
        placeholder="Select an option"
      />
    </View>
  );
};

export default App;
```

---

## Props

### Required Props

| Name           | Type                       | Description                                                                                   |
|----------------|----------------------------|-----------------------------------------------------------------------------------------------|
| `name`         | `string`                   | A unique name for the dropdown (useful in forms or when managing multiple dropdowns).          |
| `options`      | `{ value: string, label: string }[]` | The array of options for the dropdown. Each option must have a `value` and a `label`.          |
| `value`        | `string`                   | The currently selected value.                                                                 |
| `handleChange` | `(name: string, value: string) => void` | Callback function triggered when an option is selected.                                        |

### Optional Props

| Name                    | Type              | Default      | Description                                                                                   |
|-------------------------|-------------------|--------------|-----------------------------------------------------------------------------------------------|
| `placeholder`           | `string`          | `'Select an option'` | Placeholder text displayed when no value is selected.                                          |
| `style`                 | `ViewStyle`       | `{}`         | Additional styles for the component's container.                                              |
| `fontSize`              | `number`          | `16`         | Font size of the selected text in the dropdown trigger.                                        |
| `triggerTextColor`      | `string`          | `'black'`    | Color of the text displayed in the dropdown trigger.                                          |
| `triggerBorderColor`    | `string`          | `'gray'`     | Border color of the dropdown trigger.                                                         |
| `triggerBackgroundColor`| `string`          | `'#fff'`     | Background color of the dropdown trigger.                                                     |
| `IconComponent`         | `React.ReactNode` | `null`       | Custom icon to display inside the dropdown trigger.                                           |

---

## Advanced Usage

### Custom Icon Example

You can pass any icon component (e.g., from `@expo/vector-icons`) as the `IconComponent` prop.

```tsx
import { MaterialIcons } from '@expo/vector-icons';

<CustomSelect
  name="year"
  options={[
    { value: '1', label: 'First Year' },
    { value: '2', label: 'Second Year' },
  ]}
  value="1"
  handleChange={(name, value) => console.log(name, value)}
  placeholder="Select Year"
  IconComponent={<MaterialIcons name="arrow-drop-down" size={24} color="black" />}
/>
```

---

### Styling Example

Customize the dropdown trigger with styles:

```tsx
<CustomSelect
  name="example"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  value="1"
  handleChange={(name, value) => console.log(name, value)}
  placeholder="Custom Trigger"
  fontSize={18}
  triggerTextColor="blue"
  triggerBorderColor="red"
  triggerBackgroundColor="lightgray"
/>
```

---

## Screenshots

| Trigger View                                     | Dropdown View                                    |
|-------------------------------------------------|------------------------------------------------|
| ![Trigger View](https://via.placeholder.com/150) | ![Dropdown View](https://via.placeholder.com/150) |

---

## Limitations

- The component currently supports flat lists for dropdown options. If you need grouped options or hierarchical data, you'll need to customize it further.
- Custom styling for individual options is not yet supported (but can be extended easily).

---

## Contributing

We welcome contributions to improve this component! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

---

## License

This component is licensed under the [MIT License](./LICENSE). Feel free to use it in your projects!

---

## Additional Notes

- Make sure to use consistent `value` and `label` pairs in the `options` array.
- Test your styles on different devices to ensure proper rendering.

---