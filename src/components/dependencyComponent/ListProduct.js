import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Rating, AirbnbRating} from 'react-native-ratings';
import ListProductData from './../../testDatas/ListProductData';
import HeaderOther from '../sameComponents/HeaderOther';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

class ListProFlatList extends Component {
  render() {
    const {
      viewProductContainer,
      viewProduct,
      imageProduct,
      viewInforProduct,
    } = Styles;
    const {rating} = this.props;
    return (
      <View style={viewProductContainer}>
        <View style={viewProduct}>
          <Image
            style={imageProduct}
            source={require('./../../images/shoes1.jpg')}
          />
          <View style={viewInforProduct}>
            <Text numberOfLines={2}>{this.props.item.description}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', paddingTop: 10}}>
              {this.props.item.price}
            </Text>
            <View style={{width: (widthScreen * 7) / 48, marginTop: 5}}>
              <Rating
                imageSize={widthScreen / 35}
                // startingValue={rating}
                // showRating

                startingValue={this.props.item.rate}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {textOption: 'Auto', rate: '3.5'};
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenuDESC = () => {
    this.setState(() => {
      return (this.state.textOption = 'DESC');
    });
    alert(widthScreen);
    this._menu.hide();
  };
  hideMenuASCC = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    const {viewTool, viewTool1, imageInView, viewTool2} = Styles;
    const {rating} = this.props;
    return (
      <View style={{flex: 1}}>
        <HeaderOther />
        <View style={viewTool}>
          <View style={viewTool1}>
            <Image
              style={imageInView}
              source={require('./../../images/sort.png')}
            />
            <Text style={{marginLeft: 5, fontSize: 16}}> Sort:</Text>
            <Text style={{marginLeft: 5, fontSize: 16, color: 'red'}}>
              {this.state.textOption}
            </Text>
          </View>
          <View style={viewTool2}>
            <Text style={{borderWidth: 1, marginRight: 10}} />
            <Image
              style={imageInView}
              source={require('./../../images/filter.png')}
            />
            <Menu
              ref={this.setMenuRef}
              button={
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                  }}
                  onPress={this.showMenu}>
                  Option
                </Text>
              }>
              <MenuItem onPress={this.hideMenuDESC}>DESC</MenuItem>
              <MenuItem onPress={this.hideMenuASCC}>ASCC</MenuItem>
              <MenuItem onPress={this.hideMenu} disabled>
                Menu item 3
              </MenuItem>
              <MenuDivider />
            </Menu>
          </View>
        </View>
        <FlatList
          data={ListProductData}
          renderItem={({item, index}) => {
            return (
              <ListProFlatList
                item={item}
                index={index}
                parentList={this}
                navigation={this.props.navigation}
              />
            );
          }}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  viewTool: {
    height: (heightScreen * 1) / 15,
    width: widthScreen,
    borderWidth: 1,
    flexDirection: 'row',
  },
  viewTool1: {
    height: (heightScreen * 1) / 15 - 10,
    width: (widthScreen * 7) / 10 - 10,
    margin: 5,
    marginRight: 0,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageInView: {
    height: (heightScreen * 1) / 15 - 10,
    width: (heightScreen * 1) / 15 - 10,
  },
  viewTool2: {
    height: (heightScreen * 1) / 15 - 10,
    width: (widthScreen * 3) / 10 - 10,
    margin: 5,
    marginLeft: 0,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProductContainer: {
    height: (heightScreen * 1) / 4,
    width: widthScreen,
    borderBottomWidth: 1,

    borderTopWidth: 1,
    borderColor: '#dcdcdc',
  },
  viewProduct: {
    height: (heightScreen * 1) / 4 - 30,
    width: widthScreen - 30,
    borderWidth: 0.11,
    margin: 15,
    flexDirection: 'row',
    elevation: 5,
    backgroundColor: 'white',
  },
  imageProduct: {
    height: (heightScreen * 1) / 4 - 32,
    width: (heightScreen * 1) / 4 - 32,
  },
  viewInforProduct: {
    height: (heightScreen * 1) / 4 - 30,
    width: widthScreen - (heightScreen * 1) / 4 - 10,
    marginLeft: 10,
  },
});
