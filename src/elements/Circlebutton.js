import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Circlebutton extends React.Component {
  render() {
    const {style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButtom, style, {backgroundColor: bgColor}]}>
        <Text style={[styles.circleButtomTitle, {color: textColor}]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtom: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtomTitle: {
    fontSize: 32,
    color: '#fff',
  },
});

export default Circlebutton;
