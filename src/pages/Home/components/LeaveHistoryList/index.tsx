import React, { useRef } from 'react';
import {
  SectionList,
  Text,
  SectionListRenderItemInfo,
  StyleSheet,
  SectionListData,
  View,
  Animated,
} from 'react-native';
import { LeaveHistory } from 'src/models/LeaveHistory';
import colors from 'src/constants/colors';
import { textStyles } from 'src/constants/styles';
import LeaveHistoryItem from './LeaveHistoryItem';
import LeaveLeftHeader from '../LeaveLeftHeader';

type ListSection = {
  data: LeaveHistory[];
  key: string;
};

type Props = {
  histories: {
    [year: string]: {
      [monthName: string]: LeaveHistory[];
    };
  };
};

export default (props: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: SectionListRenderItemInfo<LeaveHistory>) => {
    return <LeaveHistoryItem history={item} />;
  };

  const renderSectionHeader = (info: {
    section: SectionListData<LeaveHistory>;
  }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionName}>{info.section.key}</Text>
        <View style={styles.straightLine} />
      </View>
    );
  };

  const renderListHeaderComponent = () => {
    const scaleY = scrollY.interpolate({
      inputRange: [0, 2100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={{ transform: [{ scaleY }] }}>
        <LeaveLeftHeader leaveLeft={1} />
        <View style={styles.listHeader}>
          <View style={styles.listScrollableIndicator} />
        </View>
      </Animated.View>
    );
  };

  const histories = Object.keys(props.histories).reduce<ListSection[]>(
    (res, year) => {
      Object.keys(props.histories[year]).forEach((month) => {
        res.push({
          data: props.histories[year][month],
          key: `${month} ${year}`,
        });
      });

      return res;
    },
    [],
  );

  const keyExtractor = (item: LeaveHistory) => {
    return item.startDate;
  };

  return (
    <SectionList
      sections={histories}
      renderItem={renderItem}
      ListHeaderComponent={renderListHeaderComponent}
      renderSectionHeader={renderSectionHeader}
      style={styles.list}
      keyExtractor={keyExtractor}
      scrollEventThrottle={16}
      stickySectionHeadersEnabled
      removeClippedSubviews
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.lightPrimary,
  },
  listHeader: {
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.lightPrimary,
  },
  listScrollableIndicator: {
    width: 40,
    height: 5,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    opacity: 0.3,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 25,
  },
  sectionName: {
    ...textStyles.weightMediumText,
    fontSize: 20,
    paddingVertical: 15,
    color: colors.secondary,
  },
  straightLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
});
