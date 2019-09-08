import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import HeaderDetail from './../sameComponents/HeaderDetail';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
export default class ProductDetail extends Component {
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
    return (
      <View style={{flex: 1}}>
        <HeaderDetail />
        <View
          style={{
            height: (heightScreen * 1) / 3,
            width: widthScreen,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: (heightScreen * 9) / 30,
              width: (heightScreen * 15) / 30,
            }}
            source={require('./../../images/shoes2.png')}
          />
        </View>
        <View style={{borderWidth: 0.5, width: widthScreen}} />
        <View
          style={{
            margin: 10,
            marginLeft: widthScreen / 16,
            marginRight: widthScreen / 16,
            height: (heightScreen * 1) / 14,
            borderRadius: 12,
            backgroundColor: '#484848',
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
            -
          </Text>
          <Text style={{color: 'white', fontSize: 24}}>2</Text>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
            +
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              height: (heightScreen * 1) / 15,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 16}}>ADD TO CART</Text>
            <Image
              style={{
                height: (heightScreen * 1) / 28,
                width: (heightScreen * 1) / 28,
              }}
              source={require('./../../images/cart.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: (heightScreen * 22) / 70,
            width: widthScreen,
          }}>
          <View
            style={{
              height: (heightScreen * 15) / 245,
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Red Shoes</Text>
            <Text style={{fontSize: 18, color: 'red'}}>$111.9</Text>
          </View>
          <View
            style={{
              height: (heightScreen * 7) / 245,
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: (widthScreen * 32) / 41,
                right: 0,
                // borderWidth: 1,
                width: widthScreen / 10.8,
                alignItems: 'flex-end',
              }}>
              -----------
            </Text>
            <Text style={{fontSize: 14}}>$150</Text>
          </View>
          <View
            style={{
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,
              borderWidth: 0.5,
              borderColor: 'gray',
            }}
          />
          <View
            style={{
              marginTop: 10,
              height: (heightScreen * 11) / 49,
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,
            }}>
            <Text style={{fontSize: 16}}>100% cotton</Text>
            <Text style={{fontSize: 16}}>What Did I do</Text>
            <Text style={{fontSize: 16}}>Wow it so amazing</Text>
            <Text style={{fontSize: 16}}>
              Long Môn tập đoàn chuẩn bị ở trong{' '}
            </Text>
            <Text style={{fontSize: 16}}>
              /ionic-woocomerce-mobile-app-mobilefront-plugin
            </Text>
          </View>
        </View>
        <View
          style={{
            width: (widthScreen * 7) / 8,
            marginLeft: widthScreen / 16,
            marginRight: widthScreen / 16,
            borderWidth: 0.5,
            borderColor: 'gray',
          }}
        />
        <View
          style={{
            height: (heightScreen * 2) / 14,
          }}>
          <View
            style={{
              height: (heightScreen * 1) / 14,
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>COLOR</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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
              <Image
                style={{
                  marginLeft: 10,
                  height: (heightScreen * 1) / 28,
                  width: (heightScreen * 1) / 28,
                }}
                source={require('./../../images/dropmenu.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,
              borderWidth: 0.5,
              borderColor: 'gray',
            }}
          />
          <View
            style={{
              height: (heightScreen * 1) / 14,
              width: (widthScreen * 7) / 8,
              marginLeft: widthScreen / 16,
              marginRight: widthScreen / 16,

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>SIZE</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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
              <Image
                style={{
                  marginLeft: 10,
                  height: (heightScreen * 1) / 28,
                  width: (heightScreen * 1) / 28,
                }}
                source={require('./../../images/dropmenu.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
