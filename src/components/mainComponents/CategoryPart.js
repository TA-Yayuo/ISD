import React, {Component} from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
export default class CategoryPart extends Component {
  render() {
    const {
      viewCategoryLine,
      viewCategoryOption,
      viewCategoryText,
      viewContainer,
      viewEachCategory,
      imageCategory,
    } = Styles;
    return (
      <View style={viewContainer}>
        <View style={viewCategoryText}>
          <Text style={{fontSize: 24, color: 'red'}}>Categories</Text>
        </View>
        <View style={viewCategoryOption}>
          <View style={viewCategoryLine}>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
          </View>
          <View style={viewCategoryLine}>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
          </View>
          <View style={viewCategoryLine}>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
            <View style={viewEachCategory}>
              <Image
                style={imageCategory}
                source={require('./../../images/sport.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>Category1</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  viewContainer: {
    height: (heightScreen * 5) / 10,
    width: widthScreen,

    marginTop: 10,
    backgroundColor: '#f8f8ff',
  },
  viewCategoryText: {
    margin: 10,
    marginBottom: 0,
    height: (heightScreen * 1) / 15,
    width: widthScreen - 20,
  },
  viewCategoryOption: {
    marginLeft: 10,
    marginRight: 10,
    width: widthScreen - 20,
    height: (heightScreen * 13) / 35,
  },
  viewCategoryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewEachCategory: {
    height: (heightScreen * 13) / 105,
    width: (widthScreen * 1) / 2 - 20,
    borderColor: 'gray',
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#fffaf0',
  },
  imageCategory: {
    height: (heightScreen * 13) / 210,
    width: (heightScreen * 13) / 210,
  },
});
