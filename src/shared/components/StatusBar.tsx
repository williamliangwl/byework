import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import { isIphoneX } from '../utils/platformUtil';

type Props = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
};

export default (props: Props) => {
  const { backgroundColor, barStyle } = props;
  return Platform.OS === 'ios' ? (
    <>
      <View style={[{ backgroundColor }, styles.statusBar]} />
      <StatusBar barStyle={barStyle} />
    </>
  ) : (
    <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: isIphoneX() ? 44 : 20,
  },
});
