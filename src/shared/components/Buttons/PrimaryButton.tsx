import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from 'src/constants/colors';
import { textStyles } from 'src/constants/styles';

type Props = {
  onPress: () => void;
  text: string;
};

export default (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  text: {
    ...textStyles.weightMediumText,
    color: colors.textPrimary,
    fontSize: 16,
  },
});
