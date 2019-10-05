import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Listing from './Listing'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    marginTop: 25,
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

const Search = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={text => this.Listing.SearchFilterFunction(text)}
     // onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);



export default Search;