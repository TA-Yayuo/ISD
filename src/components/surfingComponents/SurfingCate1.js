import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import SportShoesData from './../../testDatas/SportShoesData';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

class ListSportShoes extends Component {
  render() {
    const {
      viewLine,
      viewEachPro,
      imageProduct,
      viewText,
      textName,
      textPrice,
    } = Styles;
    return (
      <View style={viewLine}>
        <View style={viewEachPro}>
          <Image
            style={imageProduct}
            source={{uri: this.props.item.product.image1}}
          />
          <View style={viewText}>
            <Text style={textName}>{this.props.item.product.name1}</Text>
            <Text style={textPrice}>{this.props.item.product.price1}</Text>
          </View>
        </View>
        <View style={viewEachPro}>
          <Image
            style={imageProduct}
            source={{uri: this.props.item.product.image2}}
          />
          <View style={viewText}>
            <Text style={textName}>{this.props.item.product.name2}</Text>
            <Text style={textPrice}>{this.props.item.product.price2}</Text>
          </View>
        </View>
        <View style={viewEachPro}>
          <Image
            style={imageProduct}
            source={{uri: this.props.item.product.image3}}
          />
          <View style={viewText}>
            <Text style={textName}>{this.props.item.product.name3}</Text>
            <Text style={textPrice}>{this.props.item.product.price3}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default class SurfingCate1 extends Component {
  render() {
    const {viewContainer, textTitle, viewProductCate} = Styles;
    return (
      <View style={viewContainer}>
        <Text style={textTitle}>Sport Shoes</Text>
        <View style={viewProductCate}>
          <FlatList
            data={SportShoesData}
            renderItem={({item, index}) => {
              return (
                <ListSportShoes
                  item={item}
                  index={index}
                  parentList={this}
                  navigation={this.props.navigation}
                />
              );
            }}
          />
        </View>
        <View
          style={{
            height: (heightScreen * 1) / 15,
            width: widthScreen - 20,
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>
            See more >
          </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  viewContainer: {
    height: (heightScreen * 47) / 80,
    width: widthScreen,
    marginTop: 10,
    // borderWidth: 1,
  },
  textTitle: {
    marginLeft: (widthScreen * 1) / 12,
    marginRight: (widthScreen * 1) / 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewProductCate: {
    marginTop: 0,
    margin: (widthScreen * 1) / 12,
    height: (heightScreen * 9) / 20,
    width: (widthScreen * 37) / 45,
    justifyContent: 'space-between',
  },
  viewLine: {
    width: (widthScreen * 37) / 45,
    height: (heightScreen * 17) / 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  viewEachPro: {
    width: (widthScreen * 2) / 9,
    height: (heightScreen * 17) / 80,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: 'white',
    elevation: 10,
  },
  imageProduct: {
    height: (heightScreen * 3) / 20,
    width: (widthScreen * 2) / 9.2,
  },
  viewText: {
    borderColor: 'red',
    height: (heightScreen * 1) / 16,
    width: (widthScreen * 2) / 9.2,
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPrice: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
