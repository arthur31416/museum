import React, {PureComponent} from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import Navigation from 'react-native-navigation';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {GRAPHCOOL_URI} from '../env';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHCOOL_URI,
  }),
  cache: new InMemoryCache(),
});

const withProvider = (Component, store = {}) => {
  return class extends PureComponent {
    render() {
      return (
        <ApolloProvider store={store} client={client}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  };
};

export default withProvider;
