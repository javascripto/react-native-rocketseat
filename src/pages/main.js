import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Main extends Component {

  static navigationOptions = {
    title: 'JSHunt'
  }

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    );
  }
}