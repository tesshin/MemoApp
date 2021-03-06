import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import Circlebutton from '../elements/Circlebutton'

class MemoCreateScreen extends React.Component {
    state = {
      body: '',
    }

    handlePress() {
      const db = firebase.firestore();
      const {currentUser} = firebase.auth();
      db.collection(`users/${currentUser.uid}/memos`).add({
        // eslint-disable-next-line react/destructuring-assignment
        body: this.state.body,
        createdOn: new Date(),
      })
        .then(() => {
          this.props.navigation.goBack();
        })
        .catch(() => {
        });
    }

    render() {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.memoEditInput}
            multiline
            value={this.state.body}
            onChangeText={(text)=>{ this.setState({body: text});}}
          />
          <Circlebutton
            name="check"
            onPress={this.handlePress.bind(this)}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
