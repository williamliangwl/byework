import React from 'react';
import LeaveHistoryList from './components/LeaveHistoryList';
import { View, StyleSheet, Text, Button } from 'react-native';
import colors from 'src/constants/colors';
import StatusBar from 'src/shared/components/StatusBar';
import { connect } from 'react-redux';
import { COUNTER_REDUCER } from 'src/redux/constants';
import { decrement, increment } from 'src/redux/actions';
import { Dispatch } from 'redux';
import { ReduxState } from 'src/redux/store';

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

function Home(props: Props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <Text style={{ fontSize: 20, color: 'white' }}>{props.count}</Text>
      <Button title={'increment'} onPress={props.increment} />
      <Button title={'decrement'} onPress={props.decrement} />
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});

const mapStateToProps = (state: ReduxState) => ({
  count: state[COUNTER_REDUCER].count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => {
    return dispatch(increment());
  },
  decrement: () => {
    return dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
