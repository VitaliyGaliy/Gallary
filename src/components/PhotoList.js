import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, Image } from 'react-native'


class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }

    render(){
    const { photos, navigate } = this.props
    console.log('photos', photos);
    return (

        <ScrollView >
          {
            this.props.photos.map((p) => (
              <View style={styles.wrapper} key={p.id}>
                <TouchableHighlight
                  onPress={() => navigate('Photo', p.image_url)}
                >
                  <Image
                    source={{uri:p.image_url}}
                    style={{width: 50, height: 50}}
                  />
                </TouchableHighlight>
                <View style={styles.textwrapper}>
                  <Text style={styles.text}>
                    {`username: ${p.user.fullname}`}
                  </Text>
                  <Text style={styles.text}>
                    {`photos name: ${p.name}`}
                  </Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
    )
  }
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,

}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#72b8ff',
    flex:1,
    alignSelf:'stretch',
    flexDirection:'row',
    borderWidth:2,
    borderColor:'white',
    padding:2
  },
  textwrapper:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:10
  },
  text:{
    // flex:1
  }

})

export default PhotoList
