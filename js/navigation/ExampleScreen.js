import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class ExampleScreen extends PureComponent {
  static get options() {
    return {
      topBar: {
        title: 'Example',
        textColor: 'black',
        drawUnder: false,
        largeTitle: false,
        hidden: false,
        textFontSize: 16,
      },
    };
  }

  static defaultProps = {
    text: 'Default text',
  };

  render() {
    const {text} = this.props;

    return (
      <View
        style={{
          backgroundColor: 'palegreen',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>{text}</Text>
      </View>
    );
  }
}
