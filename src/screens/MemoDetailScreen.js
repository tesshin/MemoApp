import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Circlebutton from '../elements/Circlebutton';

const dateString = (date) => {
  if (date == null) { return ''; }
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo (memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body ? memo.body.substring(0, 10) : ''}</Text>
            <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
          </View>
        </View>
        <View styele={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>
        <Circlebutton 
          name="pencil"
          color="white" 
          style={styles.editButton} 
          onPress={() => { this.props.navigation.navigate( 'MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) } );}} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor:'#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoBody:{
    lineHeight: 22,
    fontSize: 15,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
