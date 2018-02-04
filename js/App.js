import Navigation from 'react-native-navigation';
import DiscoverScreen from './navigation/DiscoverScreen';
import BookmarkScreen from './navigation/BookmarkScreen';
import ExampleScreen from './navigation/ExampleScreen';

export const SCREENS = {
  DISCOVER_SCREEN: 'navigation.DiscoverScreen',
  BOOKMARK_SCREEN: 'navigation.BookmarkScreen',
  EXAMPLE_SCREEN: 'navigation.ExampleScreen',
};

function registerComponents() {
  Navigation.registerComponent(SCREENS.DISCOVER_SCREEN, () => DiscoverScreen);

  Navigation.registerComponent(SCREENS.BOOKMARK_SCREEN, () => BookmarkScreen);

  Navigation.registerComponent(SCREENS.EXAMPLE_SCREEN, () => ExampleScreen);
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
                    name: SCREENS.DISCOVER_SCREEN,
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
                    name: SCREENS.BOOKMARK_SCREEN,
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
