import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import SuggestedProduct from '../../testDatas/suggestedPro';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

class ListSuggetedProduct extends Component {
  render() {
    const {
      viewProductLine,
      viewEachProduct,
      viewProductDetail,
      viewProductImage,
      text1,
    } = Styles;
    return (
      <View style={viewProductLine}>
        <View style={viewEachProduct}>
          <View style={viewProductDetail}>
            <Image
              style={viewProductImage}
              source={{uri: this.props.item.product.image1}}
            />
            <Text style={text1}>{this.props.item.product.text1}</Text>
            <Text style={{fontSize: 20, color: 'red'}}>
              {this.props.item.product.price1}
            </Text>
          </View>
        </View>
        <View style={viewEachProduct}>
          <View style={viewProductDetail}>
            <Image
              style={viewProductImage}
              source={{uri: this.props.item.product.image2}}
            />
            <Text style={text1}>{this.props.item.product.text1}</Text>
            <Text style={{fontSize: 20, color: 'red'}}>
              {this.props.item.product.price1}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class SuggestedPro extends Component {
  render() {
    const {
      viewSuggestedText,
      viewContainer,
      viewProductContainer,

      seeMoreText,
    } = Styles;
    return (
      <View style={viewContainer}>
        <View style={viewSuggestedText}>
          <Text style={{fontSize: 24, color: 'red'}}>Suggested Product</Text>
        </View>
        <View style={viewProductContainer}>
          <FlatList
            data={SuggestedProduct}
            renderItem={({item, index}) => {
              return (
                <ListSuggetedProduct
                  item={item}
                  index={index}
                  parentList={this}
                  navigation={this.props.navigation}
                />
              );
            }}
          />

          <View style={seeMoreText}>
            <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>
              See more >
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
    height: heightScreen,
    width: widthScreen,
    // borderWidth: 0.1,
    backgroundColor: '#f8f8ff',
  },
  viewSuggestedText: {
    margin: 10,
    marginBottom: 0,
    height: (heightScreen * 1) / 15,
    width: widthScreen - 20,
  },
  viewProductContainer: {
    marginLeft: 10,
    marginRight: 10,
    height: (heightScreen * 14) / 15,
    width: widthScreen - 20,
    // borderWidth: 1,
  },
  viewProductLine: {
    marginTop: 10,
    height: (heightScreen * 2) / 5,
    width: widthScreen - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewEachProduct: {
    height: (heightScreen * 2) / 5,
    width: (widthScreen * 1) / 2 - 20,
    borderWidth: 0.8,
    backgroundColor: 'white',
    elevation: 5,
  },
  viewProductDetail: {
    margin: 10,
    width: (widthScreen * 1) / 2 - 40,
    height: (heightScreen * 2) / 5 - 20,
  },
  viewProductImage: {
    width: (widthScreen * 1) / 2 - 40,
    height: (widthScreen * 1) / 2 - 40,
  },
  text1: {
    fontSize: 16,
    color: '#483d8b',
    marginTop: 10,
  },
  seeMoreText: {
    height: (heightScreen * 1) / 15,
    width: widthScreen - 20,
    alignItems: 'flex-end',
  },
});
