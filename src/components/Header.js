import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getPhoto = this.getPhoto.bind(this);
    this.state={pageNumber:1}
  }

  getPhoto(e){
    const page = this.state.pageNumber
    console.log('pageNumber', this.state.pageNumber);
    this.props.fetchPhotos(page)
  }
    render(){
    return (

        <View style={styles.header}>
          <TouchableHighlight underlayColor='#64df5c' onPress={this.getPhoto} style={styles.add}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
          <View style={styles.title}>
            <Text style={{fontSize:26}}>Photo List</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.editText}>Album</Text>
            <TextInput
              style={{backgroundColor:'white', borderWidth: 1}}
              onChangeText={(pageNumber) => this.setState({pageNumber})}
              keyboardType='numeric'
              value={this.state.pageNumber}
            />
          </View>
        </View>
    )
  }
}

Header.propTypes = {
  // incrementWithDelayFn: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#72b8ff',
    flex:1,
    alignSelf:'stretch',
    flexDirection:'row',
    padding:2
  },
  title:{
    flex:5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  edit:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'white'
  },
  add:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:'white'
  },
  plus:{
    fontSize:46,
    color:'white',
  },
  getPhotos:{
    fontSize:14,
    color:'white',
  },
  number:{
    flexDirection:'column',
  }
})

export default Header
