import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import HeaderMain from './../sameComponents/HeaderMain';
import SurfingCate1 from './SurfingCate1';

export default class SurfingTab extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f8f8ff'}}>
        <HeaderMain />
        <ScrollView>
          <SurfingCate1 />
          <SurfingCate1 />
          <SurfingCate1 />
          <SurfingCate1 />
        </ScrollView>
      </View>
    );
  }
}
