import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  addButton: {
    marginTop: 24,
  },
  form: {
    paddingTop: 16,
    width: '100%',
  },
  textInput: {
    borderRadius: 7,
    backgroundColor: Colors.white,
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '400',
    paddingVertical: 7,
    paddingHorizontal: 6,
    color: Colors.black,
  },
  margin: {
    marginBottom: 16,
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.red,
  },
});
