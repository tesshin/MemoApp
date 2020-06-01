import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Circlebutton from '../elements/Circlebutton'

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.memoEditInput} multiline value="Hi"/>
            <Circlebutton name='check'/>
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