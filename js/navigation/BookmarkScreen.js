import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class BookmarkScreen extends PureComponent {
  static get options() {
    return {
      topBar: {
        title: 'Bookmark',
        textColor: 'black',
        drawUnder: false,
        largeTitle: false,
        hidden: false,
        textFontSize: 16,
      },
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightcyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Bookmark body</Text>
      </View>
    );
  }
}
