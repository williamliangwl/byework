import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNDateTimePicker, {
  Event,
} from '@react-native-community/datetimepicker';
import colors from 'src/constants/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { isIOS } from '../utils/platformUtil';
import { textStyles } from 'src/constants/styles';

const isIos: boolean = isIOS();

type Props = {
  label: string;
  value: Date;
  onChange: (_: Event, newDate: Date) => void;
  minimumDate?: Date;
};

function DatePicker(props: Props) {
  const { value, label, minimumDate, onChange } = props;
  const [shouldShowPicker, setShouldShowPicker] = useState(isIos);

  const showPicker = () => {
    if (isIos) {
      return;
    }
    setShouldShowPicker(true);
  };

  const handleDateChanged = (e: Event, newDate?: Date) => {
    if (newDate) {
      onChange(e, newDate);
    }
    setShouldShowPicker(isIos);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      {shouldShowPicker && (
        <RNDateTimePicker
          value={value}
          onChange={handleDateChanged}
          style={styles.picker}
          minimumDate={minimumDate}
        />
      )}
      {!isIos && (
        <TouchableWithoutFeedback onPress={showPicker}>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value.toDateString()}</Text>
            <Icon name={'calendar'} size={20} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 12,
    width: 200,
  },
  label: {
    ...textStyles.normalText,
    fontSize: 16,
    marginBottom: 8,
  },
  valueContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 12,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueText: {
    ...textStyles.normalText,
    fontSize: 16,
  },
  picker: {
    height: 50,
    backgroundColor: colors.lightPrimary,
  },
});

DatePicker.defaultProps = {
  value: new Date(),
};

export default DatePicker;
