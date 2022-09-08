import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkWhite,
  },
  last: {
    borderBottomWidth: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 17,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 2,
    color: Colors.black,
  },
  description: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    color: Colors.black,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: Colors.darkGray,
  },
});
