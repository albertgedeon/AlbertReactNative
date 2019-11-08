import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.navigation.getParam('company'));
        this.state = {};
    }

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        );
      }
}


export default withNavigation(DetailScreen);
