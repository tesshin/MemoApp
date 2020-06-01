import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c'
}, 'FontAwsome');

class Circlebutton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState({fontLoaded: true});
  }
  render() {
    const {name, style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButtom, style, {backgroundColor: bgColor}]}>
        {
          this.state.fontLoaded ? (
          <CustomIcon name={name} style={[styles.circleButtomTitle, {color: textColor}]}/>
          ) : null
        }
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
    fontFamily: 'FontAwsome',
    fontSize: 24,
    color: '#fff',
  },
});

export default Circlebutton;
