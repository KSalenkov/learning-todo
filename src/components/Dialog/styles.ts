import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 52,
    zIndex: 1,
  },
  container: {
    width: '100%',
    backgroundColor: `${Colors.gray}f2`,
    paddingHorizontal: 16,
    paddingTop: 18,
    borderRadius: 14,
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: 17,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  description: {
    marginTop: 4,
    color: Colors.textGray,
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    borderTopWidth: 1,
    borderTopColor: Colors.white,
    marginHorizontal: -16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    borderRightWidth: 0.5,
    borderRightColor: Colors.white,
  },
  rightButton: {
    borderLeftWidth: 0.5,
    borderLeftColor: Colors.white,
  },
  buttonText: {
    color: Colors.lightGray,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 17,
  },
  confirmText: {
    color: Colors.blue,
  },
});
