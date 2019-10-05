import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        width : 200
    },
    photo: {
        height: 50,
        width: 50,
    },
    containerDetailsView: {
        marginLeft: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price:{
        fontSize: 11,
        fontStyle: 'italic',
        textAlign: 'right'
    },
});

const Row = ({ artist_name, title, price, image_url }) => (
     <View style={styles.rowContainer}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}> {artist_name}</Text>
            <View style={styles.containerDetailsView}>
              <Text style={styles.description}>{title}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
        </View>
     </View>  
);

export default Row;