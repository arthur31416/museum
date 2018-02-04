import React, {PureComponent} from 'react';
import Navigation from 'react-native-navigation';
import {View, Text, Button} from 'react-native';
import Locations from '../../lib/js/re/locations';
import {SCREENS} from '../App';

const BUTTON_LEFT = 0;
const BUTTON_RIGHT = 1;

export default class DiscoverScreen extends PureComponent {
  static get options() {
    return {
      topBar: {
        title: 'Static Title',
        textColor: 'black',
        drawUnder: false,
        largeTitle: false,
        hidden: false,
        textFontSize: 16,
        textFontFamily: 'HelveticaNeue-Semibold',
        leftButtons: [
          {
            id: BUTTON_LEFT,
            icon: require('../../img/navicon_add.png'),
          },
        ],
        rightButtons: [
          {
            id: BUTTON_RIGHT,
            title: 'One',
            buttonFontSize: 16,
            buttonColor: 'red',
          },
        ],
      },
    };
  }

  constructor(props) {
    super(props);
    this.push = this.push.bind(this);
  }

  onNavigationButtonPressed(id) {
    if (id === BUTTON_LEFT) {
      alert('left pressed');
    }

    if (id === BUTTON_RIGHT) {
      alert('right pressed');
    }
  }

  push() {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.EXAMPLE_SCREEN,
        passProps: {
          text: 'Stacked',
        },
      },
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'peachpuff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>

        <Button onPress={this.push} title="Go to stacked" />

        {Locations.component}
      </View>
    );
  }
}
