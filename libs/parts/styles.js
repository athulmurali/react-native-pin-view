import {StyleSheet, I18nManager} from 'react-native'

export default StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    alignSelf    : 'center',

  },
  passwordInputViewItem      : {
    alignItems    : 'center',
    justifyContent: 'center',
    height        : 16,
    margin        : 5,
    width         : 16,
    borderRadius  : 16 / 2,
    borderStyle: 'solid',
    borderWidth : 1,
  },
  passwordInputViewItemActive: {
    alignItems    : 'center',
    justifyContent: 'center',
    height        : 16,
    width         : 16,
    margin        : 5,
    borderRadius  : 16 / 2,
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 16,
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
  },
  keyboardViewItemText       : {
    fontSize  : 22,
  },
})
