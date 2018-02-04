import React, {PureComponent} from 'react';
import {ApolloProvider} from 'react-apollo';
import Navigation from 'react-native-navigation';
// import {ApolloClient} from 'apollo-client';
// import {HttpLink} from 'apollo-link-http';
// import {InMemoryCache} from 'apollo-cache-inmemory';
// import {GRAPHCOOL_URI} from '../env';
import {Instance} from '../lib/js/re/client';

const withProvider = (Component, store = {}) => {
  return class extends PureComponent {
    render() {
      return (
        <ApolloProvider store={store} client={Instance}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  };
};

export default withProvider;
