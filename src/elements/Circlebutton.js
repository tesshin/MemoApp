import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Circlebutton extends React.Component {
    render() {
        return (
            <View style={styles.circleAddButtom}>
                <Text style={styles.circleAddButtomTitle}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleAddButtom: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    circleAddButtomTitle: {
        fontSize: 32,
        color: '#fff',
    },
}); 

export default Circlebutton;