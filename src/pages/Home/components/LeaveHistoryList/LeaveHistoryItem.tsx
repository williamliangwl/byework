import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { LeaveHistory } from 'src/models/LeaveHistory';
import colors from 'src/constants/colors';
import { textStyles } from 'src/constants/styles';

type Props = {
  history: LeaveHistory;
};

export default (props: Props) => {
  const [isExpand, setExpand] = useState(false);
  const [expandAnim] = useState(new Animated.Value(0));

  const { history } = props;
  const startDate = new Date(history.startDate).getDate();
  const endDate = new Date(history.endDate).getDate();
  const isMultipleDay = endDate - startDate > 0;

  const toggleDate = async () => {
    const toValue = isExpand ? 0 : 1;
    const newExpandValue = !isExpand;
    await setExpand(newExpandValue);
    Animated.timing(expandAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const dateContainerBehindOpacity = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
    extrapolate: 'clamp',
  });
  const dateContainerBehindLeft = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 0],
    extrapolate: 'clamp',
  });

  return (
    <TouchableWithoutFeedback onPress={isMultipleDay ? toggleDate : undefined}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.monthText}>{startDate}</Text>
          </View>
          {isMultipleDay && (
            <>
              <Animated.View
                style={[
                  styles.dotContainer,
                  {
                    opacity: expandAnim,
                    width: Animated.multiply(expandAnim, 30),
                  },
                ]}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </Animated.View>
              <Animated.View
                style={[
                  styles.dateContainer,
                  styles.dateContainerBehind,
                  {
                    opacity: dateContainerBehindOpacity,
                    marginLeft: dateContainerBehindLeft,
                  },
                ]}>
                <Text style={styles.monthText}>{endDate}</Text>
              </Animated.View>
            </>
          )}
        </View>

        <Text
          style={[
            styles.descriptionText,
            // eslint-disable-next-line react-native/no-inline-styles
            { marginLeft: isMultipleDay ? 16 : 23 },
          ]}
          numberOfLines={1}>
          {history.description}
        </Text>

        <Text style={styles.numOfDaysText}>{`${
          endDate - startDate + 1
        } day(s)`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightPrimary,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dateContainer: {
    backgroundColor: colors.tertiary,
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainerBehind: {
    zIndex: -1,
    opacity: 0.5,
  },
  monthText: {
    color: colors.textPrimary,
    fontSize: 20,
  },
  descriptionText: {
    ...textStyles.weightMediumText,
    color: colors.tertiary,
    fontSize: 18,
    flex: 1,
  },
  numOfDaysText: {
    ...textStyles.weightMediumText,
    color: colors.tertiary,
    fontSize: 14,
    opacity: 0.5,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    backgroundColor: colors.tertiary,
    opacity: 0.3,
  },
});
