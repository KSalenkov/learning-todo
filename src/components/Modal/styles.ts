import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${Colors.black}66`,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backgroundButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
