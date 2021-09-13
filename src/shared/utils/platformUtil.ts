import { Dimensions, Platform } from 'react-native';

export const isIphoneX = () => {
  const dimension = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 896 ||
      dimension.width === 896)
  );
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};
