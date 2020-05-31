import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from './src/components/MemoList';
import Appbar from './src/components/Appbar';
import Circlebutton from './src/elements/Circlebutton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <Circlebutton>+</Circlebutton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
