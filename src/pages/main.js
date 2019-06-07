import React, { Component } from 'react';
import { Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default class Main extends Component {

  static navigationOptions = {
    title: 'JSHunt'
  }

  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs: products } = response.data;

    console.log(products); // (CTRL + M) no emulador para debugar remotamente

    this.setState({ products })
  }

  renderItems = ({ item: { title, description, url } }) => (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );


  render() {
    const { products } = this.state;
    return (
      <View>
        <FlatList
          data={products}
          keyExtractor={p => p._id}
          renderItem={this.renderItems}>
        </FlatList>
      </View>
    );
  }
}