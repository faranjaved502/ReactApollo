import {
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  View, Image, TextInput, ActivityIndicator
} from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import Search from './Search';
import Row from './Row';

const query = gql`
         {
             artworks {
              title
              artist_names
              price
              imageUrl
            }
        }
`;

class Listing extends PureComponent {
constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  _renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Row
            artist_name={item.artist_names}
            title={item.title}
            price={item.price}
            image_url={item.imageUrl}
            /> 
      </TouchableOpacity>
    );
  }

  SearchFilterFunction(text) {
    console.log('Search text..',text);
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
    //applying filter for the inserted text in search bar
  const itemData = item.artist_names || item.title? item.artist_names.toUpperCase() :''.toUpperCase();
    const textData = text.toUpperCase();
     return itemData.indexOf(textData) > -1;

    });
    console.log('filterArray',newData);
     this.setState({
       //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
       dataSource: newData,
       search: text,
     });
  }

  render() {
    console.log('After filter render again',this.state.dataSource);
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.search}
          />
        </View>
        <Query query={query}>
          {(response, error) => {
            if (error) {
              console.log('Response Error-------', error);
              return <Text style={styles.errorText}>{error}</Text>;
            }
          
            if (response) {
              console.log('response-data-------------', response.data);
              
          if (this.state.dataSource && this.state.dataSource.length > 0){
              
            this.setState({
              isLoading: false,
              dataSource: this.state.dataSource
            });
              }else{
                this.setState({
                  isLoading: false,
                  dataSource: response.data.artworks
                },
                function() {
                  this.arrayholder = response.data.artworks;
                });
              }

              return (
                <FlatList
                  data={this.state.dataSource}
                  renderItem={item => this._renderItem(item)}
                  enableEmptySections={true}
                  style={{ marginTop: 10 }}
                  keyExtractor={(item, index) => index.toString}

                />
              );
            }
          }}
        </Query>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
  },
  containerSearch: {
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
export default Listing;