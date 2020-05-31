import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create ({
  text: {
    color:'#ddd',
    backgroundColor:'#eee'
  },
});
export default BodyText;
