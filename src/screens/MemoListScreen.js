import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import Circlebutton from '../elements/Circlebutton';

class MemoListScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation}/>
        <Circlebutton 
          name='plus' 
          onPress={() => { this.props.navigation.navigate( 'MemoEdit' ); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
