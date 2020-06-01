import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import Circlebutton from '../elements/Circlebutton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <Circlebutton name='plus'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
  },
});

export default MemoListScreen;
