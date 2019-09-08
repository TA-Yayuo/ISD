import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: 'green'}}>
        <TouchableHighlight
          onPress={() => {
            navigate('Profile', {name: 'Jane'});
          }}>
          <Text>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>Ha Tien Anh</Text>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: `A`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTintColor: 'red',
      headerTransparent: true,
      headerStyle: {backgroundColor: 'gray'},
    }),
  },
});

const App = createAppContainer(MainNavigator);

export default App;
