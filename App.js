/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
            // - 多行显示文字
            //multiline={true}

            // -  键盘类型
            //keyboardType = {'number-pad'}

            // - 明文密码
            //password={true}

            // - placeholder
            placeholder={'默认显示文字'}

            // - 清除按钮
            clearButtonMode = {'always'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  textInputStyle:{
    backgroundColor:'red',
    width:300,
    height:90,
    borderWidth: 3,
    borderColor : 'green',
    borderBottomColor :'yellow'
  }
});
