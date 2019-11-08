import React from 'react';
import {  
    TouchableHighlight,
    View,
    StyleSheet,
    Text
} from 'react-native';
import { withNavigation } from 'react-navigation';

class FlatListItem extends React.Component {
  render() {
    return (
        <TouchableHighlight
        onPress={() => {
            console.log(this.props.item.company_name)
            this.props.navigation.push('Details', { company:this.props.item })
        }}
        underlayColor='yellow'>
        <View>
            <Text style={styles.item}>{ this.props.item.company_name }</Text>
        </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default withNavigation(FlatListItem);