import React, { Component } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import styles from './DefineUserRewardsComponentStyle';

export default class DefineUserRewardsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={{flex: 1}}/>

        <Text>define customer rewards</Text>

        <View style={{flex: 1}}/>
      </View>
    );
  }
}
