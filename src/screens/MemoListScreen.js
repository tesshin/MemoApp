import React from 'react';
import { StyleSheet, View, useWindowDimensions, SnapshotViewIOS } from 'react-native';
import firebase, { database } from 'firebase';
import MemoList from '../components/MemoList';
import Circlebutton from '../elements/Circlebutton';
//this.props.navigation.navigate( 'MemoEdit' );

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore()
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) =>{
          memoList.push({...doc.data(), key: doc.id});
        });
        this.setState({memoList});
      });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation}/>
        <Circlebutton
          name="plus"
          onPress= { this.handlePress.bind(this) }
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
