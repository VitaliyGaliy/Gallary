import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Header from './Header'
import PhotoList from './PhotoList'

class Photos extends React.Component {
  static navigationOptions = {
    title: "Welcome",
    headerStyle: { marginTop: 24 },
  }
  render() {
    const {fetchPhotos, photoState:{photos}, navigation:{navigate}} = this.props

    return (
      <View style={styles.container}>
        <Header fetchPhotos={fetchPhotos} />
        <View style={styles.photoElems}>
          <PhotoList photos={photos} navigate={navigate}/>
        </View>
      </View>
    )
  }
}

Photos.propTypes = {
  photoState: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf:'stretch'
    // paddingTop: 24,
  },
  photoElems: {
    flex: 9
  },


})

export default Photos
