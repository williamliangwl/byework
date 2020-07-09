import React from 'react';
import LeaveHistoryList from './components/LeaveHistoryList';
import { View, StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import StatusBar from 'src/shared/components/StatusBar';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <LeaveHistoryList
        histories={{
          2020: {
            May: [
              {
                startDate: '2020-05-21',
                endDate: '2020-05-30',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-17',
                endDate: '2020-05-17',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-01',
                endDate: '2020-05-04',
                description: 'Cuti',
              },
            ],
            April: [
              {
                startDate: '2020-05-01',
                endDate: '2020-05-04',
                description: 'Cuti',
              },
            ],
            March: [
              {
                startDate: '2020-05-01',
                endDate: '2020-05-01',
                description: 'Cuti',
              },
            ],
            February: [
              {
                startDate: '2020-05-21',
                endDate: '2020-05-30',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-17',
                endDate: '2020-05-17',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-01',
                endDate: '2020-05-04',
                description: 'Cuti',
              },
            ],
            January: [
              {
                startDate: '2020-05-21',
                endDate: '2020-05-30',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-17',
                endDate: '2020-05-17',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-01',
                endDate: '2020-05-04',
                description: 'Cuti',
              },
            ],
            December: [
              {
                startDate: '2020-05-21',
                endDate: '2020-05-30',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-17',
                endDate: '2020-05-17',
                description: 'Cuti',
              },
              {
                startDate: '2020-05-01',
                endDate: '2020-05-04',
                description: 'Cuti',
              },
            ],
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
