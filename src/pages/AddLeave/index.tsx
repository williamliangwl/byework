import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import StatusBar from 'src/shared/components/StatusBar';
import DateRangeInput from 'src/shared/components/DateRangeInput';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <DateRangeInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPrimary,
    flex: 1,
  },
});
