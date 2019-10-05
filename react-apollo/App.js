import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ApolloProvider} from 'react-apollo'; 
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import { Platform } from 'react-native';
// You can import from local files
//import AssetExample from './components/AssetExample';
import Listing from './components/Listing';
import Test from './components/test';


const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({uri:'https://metaphysics-production.artsy.net'
  })
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
       <Listing />
      </ApolloProvider>
    );
  }
}