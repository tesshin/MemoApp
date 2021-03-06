import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import firebase from 'firebase';
import Circlebutton from '../elements/Circlebutton'

class MemoEditScreen extends React.Component {
  state ={ 
    body: '',
    key:'',
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.memo.body, 
      key: params.memo.key,
    });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const newDate = firebase.firestore.Timestamp.now();
    const db=  firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdOn: newDate,
      })
      .then(()=>{
        const {navigation} = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
          });
        navigation.goBack();
      })
      .catch(()=> {
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.memoEditInput} 
          multiline 
          value={this.state.body}
          onChangeText={(text) => {this.setState({ body: text});}}
        />
        <Circlebutton 
          name='check' 
          onPress={ this.handlePress.bind(this)}
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

export default MemoEditScreen;
