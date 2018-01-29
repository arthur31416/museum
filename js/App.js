import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Navigation from 'react-native-navigation';
import TopTabScreen from './TopTabScreen';

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
        textFontFamily: 'HelveticaNeue-Italic',
        rightButtons: [
          {
            id: 0,
            title: 'One',
            buttonFontSize: 28,
            buttonColor: 'red',
          },
        ],
        leftButtons: [
          {
            id: 1,
            icon: require('../img/navicon_add.png'),
            title: 'Left',
            buttonColor: 'purple',
          },
        ],
      },
    };
  }

  constructor(props) {
    super(props);
    this.push = this.push.bind(this);
  }

  push() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.YoScreen',
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

        <Button onPress={this.push} title="TOGGLE" />
      </View>
    );
  }
}

class YoScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.tabIndex === 0 ? 'pink' : 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>FEW</Text>
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
    `navigation.playground.YoScreen`,
    () => YoScreen,
  );
  Navigation.registerComponent(
    `navigation.playground.TopTabScreen`,
    () => TopTabScreen,
  );
}

function start() {
  registerComponents();
  Navigation.events().onAppLaunched(() => {
    // Navigation.setRoot({
    //   bottomTabs: {
    //     children: [
    //       {
    //         component: {
    //           name: 'navigation.playground.WelcomeScreen',
    //           passProps: {
    //             text: 'This is tab 1',
    //             tabIndex: 0,
    //             myFunction: () => 'Hello from a function!',
    //           },
    //         },
    //       },
    //       {
    //         component: {
    //           name: 'navigation.playground.WelcomeScreen',
    //           passProps: {
    //             tabIndex: 1,
    //             text: 'This is tab 2',
    //           },
    //           options: {
    //             topBar: {
    //               title: 'asdasd',
    //               backgroundColor: '#4aa0d2',
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // });

    Navigation.setRoot({
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen',
              passProps: {},
              options: {
                topBar: {
                  title: 'asdasd',
                  backgroundColor: '#4aa0d2',
                },
              },
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
