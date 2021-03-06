import React, { Component } from 'react';
import { View, Image, Text, ToastAndroid } from 'react-native';
import styles from './TransactionsComponentStyle';
import { getArrayItem } from '../../services/LocalStorageService';

export default class TransactionsComponent extends Component {

  constructor(args) {
    super(args);
    this.state = {pendingTransactions: []}
  }

  async componentDidMount() {
    const pendingTransactions = await getArrayItem('pendingTransactions');
    pendingTransactions.map( (transactionHash) => console.log(transactionHash));
    this.setState({pendingTransactions});
  }

  render() {

    let pendingTransactionTextViews = this.state.pendingTransactions.map( (transactionHash) => {
      return <Text style={styles.transactionText} key={transactionHash}>{transactionHash}</Text>;
    });

    return (

      <View style={styles.container}>

        <Text style={styles.title}>transactions</Text>

        <View>
          {pendingTransactionTextViews}
        </View>

      </View>
    );
  }
}