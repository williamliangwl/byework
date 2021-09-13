import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from './Buttons/PrimaryButton';
import DatePicker from './DatePicker';

export default () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  function changeStartDate(_: Event, date: Date) {
    setStartDate(date);
  }
  function changeEndDate(_: Event, date: Date) {
    setEndDate(date);
  }

  return (
    <>
      <View style={styles.container}>
        <DatePicker
          label="From"
          value={startDate}
          onChange={changeStartDate}
          minimumDate={today}
        />
        <DatePicker
          label="To"
          value={endDate}
          onChange={changeEndDate}
          minimumDate={startDate}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Add" onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginHorizontal: 12,
  },
});
