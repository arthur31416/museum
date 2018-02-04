import React, {PureComponent} from 'react';

export default class TextScreen extends PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'palegreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
