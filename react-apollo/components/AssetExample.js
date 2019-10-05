// import * as React from 'react';
// import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator, SafeAreaView} from 'react-native';
// import gql from 'graphql-tag';
// import graphql from 'graphql-tag';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloClient,createNetworkInterface, ApolloProvider} from 'apollo-client';
// import { request } from "graphql-request";
// import Row from './Row';
 //import Search from './Search';



// export default class AssetExample extends React.Component {
// createClient() {
//     // Initialize Apollo Client with URL to our server
//     return new ApolloClient({
//       networkInterface: createNetworkInterface({
//         uri: 'https://metaphysics-production.artsy.net'
//       })
//     });
//   }

//   render() {
//     return (
//       <ApolloProvider client={this.createClient()}>
//         <View style={styles.container}>
//          // <ARTWORK_DATA />
//         </View>
//       </ApolloProvider>
//     );
//   }
// }

// const ARTWORK_DATA = graphql(
//   gql`
//     {
//     artworks {
//       title
//       artist_names
//       price
//       imageUrl
//   }
// }
//  `,
//   {
//     options: {
//       notifyOnNetworkStatusChange: true,
//     },
//   }
// )(ArtData);

// function ArtData({ data }) {
//   return (
//   //  <View style={styles.container}>
//     //  <Text style={styles.title}>ArtWork List</Text>
//      // <ArtList data={data} />
//       console.log(data)
//    // </View>
//   );
// }

// function ArtList({ data }) {
//   // if (data.networkStatus === 1) {
//   //   return <ActivityIndicator style={styles.loading} />;
//   // }
//   if (data.loading) {
//     return <Text style={styles.loading}>Loading...</Text>;
//   }

//   if (data.error) {
//     return <Text>Error: {data.error.message}</Text>;
//   }

//   return (
//     <CustomListview
//           itemList={data}
//         />

//   );
// }

// const CustomListview = ({ itemList }) => (
//     <View style={styles.container}>
//         <FlatList
//                 data={itemList}
//                 renderItem={({ item }) => <Row
//                     title={item.title}
//                     artist_names={item.artist_names}
//                     image_url={item.imageUrl}
//                 />}
//             />

//     </View>
// );

// // const ARTWORK_QUERY = gql`
// //   {
// //   artworks {
// //     title
// //     artist_names
// //     price
// //     imageUrl
  
// //   }
// // }
// // `

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 24,
//   },
// });