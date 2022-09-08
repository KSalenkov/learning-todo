import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    width: '100%',
  },
  filtersContainer: {
    width: '100%',
    borderRadius: 14,
    backgroundColor: `${Colors.gray}f2`,
  },
  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.textGray,
  },
  selected: {
    color: Colors.blue,
  },
});
