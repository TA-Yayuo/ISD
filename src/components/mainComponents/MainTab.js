import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import HeaderMain from './../sameComponents/HeaderMain';

import SldieShow from './SlideShow';
import CategoryPart from './CategoryPart';
import SuggestedPro from './SuggestedPro';
export default class MainTab extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#dcdcdc'}}>
          <HeaderMain />
          <SldieShow />
          <CategoryPart />
          <SuggestedPro />
          <SuggestedPro />
        </View>
      </ScrollView>
    );
  }
}
