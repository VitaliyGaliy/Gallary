import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native'


const Photo = (props) => {
  const {height, width} = Dimensions.get('window');
  const img = props.navigation.state.params;
  console.log('props', props.navigation.state.params);
  return (
    <View style={styles.container}>
      <Image
        source={{uri:img}}
        style={{flex: 1,
                aspectRatio: 1.5,
                resizeMode: 'contain',}}
      />
    </View>
  )
}

Photo.propTypes = {
  photoState: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default Photo
