import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import { textStyles } from 'src/constants/styles';

type Props = {
  leaveLeft: number;
};

export default class LeaveLeftHeader extends React.PureComponent<Props> {
  render() {
    const { leaveLeft = 0 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.leaveNumber}>{leaveLeft}</Text>
        <Text style={styles.leaveText}>{'leaves left'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaveNumber: {
    ...textStyles.weightBoldText,
    color: colors.textPrimary,
    fontSize: 80,
    marginBottom: 25,
  },
  leaveText: {
    ...textStyles.normalText,
    color: colors.textPrimary,
    fontSize: 24,
    opacity: 0.7,
  },
});
