import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

export default class SldieShow extends Component {
  render() {
    const {slideImage, textInSlide, text} = Styles;
    return (
      <View style={{height: (heightScreen * 3.5) / 10, width: widthScreen}}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={0}
          showPagination>
          <View>
            <Image
              style={slideImage}
              source={require('./../../images/giaytt.jpg')}
            />
            <View style={textInSlide}>
              <Text style={text}>alsdkaj</Text>
            </View>
          </View>

          <View>
            <Image
              style={slideImage}
              source={require('./../../images/giaycg.jpg')}
            />
            <View style={textInSlide}>
              <Text style={text}>alsdkaj</Text>
            </View>
          </View>
          <View>
            <Image
              style={slideImage}
              source={require('./../../images/giayst.jpg')}
            />
            <View style={textInSlide}>
              <Text style={text}>alsdkaj</Text>
            </View>
          </View>
        </SwiperFlatList>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  slideImage: {
    height: (heightScreen * 3.5) / 10,
    width: widthScreen,
  },
  textInSlide: {
    position: 'absolute',
    top: (heightScreen * 7) / 100,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
