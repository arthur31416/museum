import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Navigation from 'react-native-navigation';
import withProvider from './withProvider';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const LocationLayout = gql`
  query getLocation {
    allLocations {
      name
      city
    }
  }
`;

class TextScreen extends Component {
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

class Locations extends Component {
  render() {
    if (this.props.data.loading) {
      return <Text>Loading...</Text>;
    }

    if (this.props.data.error) {
      return <Text>{JSON.stringify(this.props.data.error)}</Text>;
    }

    return (
      <View
        style={{
          backgroundColor: 'gold',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.props.data.allLocations.map(loc => (
          <View key={loc.id}>
            <Text>
              {loc.name} - {loc.city}
            </Text>
          </View>
        ))}
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
          backgroundColor: 'peachpuff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>

        <Button onPress={this.push} title="Go to stacked" />

        <WelcomeScreenWithLocation />
      </View>
    );
  }
}

const WelcomeScreenWithLocation = graphql(LocationLayout)(Locations);

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
          backgroundColor: 'lightcyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Bookmark body</Text>
      </View>
    );
  }
}

function registerComponents() {
  Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () =>
    withProvider(WelcomeScreen),
  );

  Navigation.registerComponent(`navigation.playground.BookmarkScreen`, () =>
    withProvider(BookmarkScreen),
  );

  Navigation.registerComponent(
    `navigation.playground.TextScreen`,
    () => TextScreen,
  );
}

function start() {
  registerComponents();

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
