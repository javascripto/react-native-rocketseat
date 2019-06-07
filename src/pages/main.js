import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';


export default class Main extends Component {

  static navigationOptions = {
    title: 'JSHunt'
  }

  state = {
    page: 1,
    products: [],
    productInfo: null,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs: products, ...productInfo } = response.data;

    console.log(products); // (CTRL + M) no emulador para debugar remotamente

    this.setState({
      page,
      productInfo,
      products: [...this.state.products, ...products],
    });
  }

  loadMore = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  renderItems = ({ item: { title, description, url } }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productDescription}>{description}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );


  render() {
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={p => p._id}
          renderItem={this.renderItems}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1} // faltando 10% do final da lista, dispare õ método para carregar mais items
          contentContainerStyle={styles.list}
          >
        </FlatList>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  productContainer: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  productDescription: {
    marginTop: 5,
    color: '#999',
    fontSize: 16,
    lineHeight: 24,
  },
  productButton: {
    height: 42,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#da552f',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  productButtonText: {
    fontSize: 16,
    color: '#da552f',
    fontWeight: 'bold'
  }
});
