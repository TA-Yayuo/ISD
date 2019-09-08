import React, {Component} from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
export default class HeaderDetail extends Component {
  render() {
    const {
      headerContainer,
      imageContainer,
      viewText,
      textHeader,
      searchContainer,
      cartContainer,
    } = Styles;
    return (
      <View style={headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./../../images/blackBack.png')}
            style={imageContainer}
          />
          <View style={imageContainer} />
        </View>
        <View style={viewText}>
          <Text style={textHeader} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={searchContainer}>
            <Image
              source={require('./../../images/blackSearch.png')}
              style={{
                height: (heightScreen * 2) / 50,
                width: (heightScreen * 2) / 50,
              }}
            />
          </View>
          <View style={cartContainer}>
            <Image
              source={require('./../../images/blackCart.png')}
              style={imageContainer}
            />
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  headerContainer: {
    height: (heightScreen * 1) / 15,
    width: widthScreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    height: (heightScreen * 2) / 50,
    width: (heightScreen * 2) / 50,
  },
  viewText: {
    height: (heightScreen * 2) / 50,
    width: (widthScreen * 1) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {fontSize: 24, fontWeight: 'bold', color: '#EEEEEE'},
  searchContainer: {
    height: (heightScreen * 2) / 50,
    width: (heightScreen * 2) / 50,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cartContainer: {
    height: (heightScreen * 2) / 50,
    width: (heightScreen * 2) / 50,
    marginLeft: 5,
  },
});
