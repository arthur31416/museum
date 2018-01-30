import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Navigation from 'react-native-navigation';
import TopTabScreen from './TopTabScreen';

class TextScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const BUTTON_LEFT = 0;
const BUTTON_RIGHT = 1;

class WelcomeScreen extends Component {
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
            icon: require('../img/navicon_add.png'),
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
        name: 'navigation.playground.TextScreen',
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
          backgroundColor: this.props.tabIndex === 0 ? 'pink' : 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>

        <Button onPress={this.push} title="Go to stacked" />
      </View>
    );
  }
}

class BookmarkScreen extends Component {
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
          backgroundColor: this.props.tabIndex === 0 ? 'pink' : 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Bookmark body</Text>
      </View>
    );
  }
}

function registerComponents() {
  Navigation.registerComponent(
    `navigation.playground.WelcomeScreen`,
    () => WelcomeScreen,
  );
  Navigation.registerComponent(
    `navigation.playground.BookmarkScreen`,
    () => BookmarkScreen,
  );
  Navigation.registerComponent(
    `navigation.playground.TopTabScreen`,
    () => TopTabScreen,
  );
  Navigation.registerComponent(
    `navigation.playground.TextScreen`,
    () => TextScreen,
  );
}

function start() {
  registerComponents();
  console.warn(
    '-----',
    Navigation.events(),
    // Navigation.events().onNavigationButtonPressed,
  );
  // Navigation.events().onNavigationButtonPressed(() => {
  //   console.log('bbbbbbbb');
  // });

  Navigation.events().onAppLaunched(() => {
    Navigation.setRoot({
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'navigation.playground.WelcomeScreen',
                    passProps: {
                      text: 'This is tab 1',
                      myFunction: () => 'Hello from a function!',
                    },
                    options: {
                      bottomTab: {
                        title: 'Explore',
                      },
                      bottomTabs: {
                        textColor: '#12766b',
                        selectedTextColor: 'red',
                        fontFamily: 'HelveticaNeue-Semibold',
                        fontSize: 13,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'navigation.playground.BookmarkScreen',
                    // passProps: {
                    //   text: 'This is tab 2',
                    // },
                    options: {
                      bottomTab: {
                        title: 'Bookmarks',
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    });
  });
}

module.exports = {
  start,
};
