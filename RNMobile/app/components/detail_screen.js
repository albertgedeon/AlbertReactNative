import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          company: props.navigation.getParam('company')
        };
    }

    render() {
      console.log(this.state.company)
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Company Name: {this.state.company.company_name}</Text>
            <Text>Street: {this.state.company.address.street}</Text>
            <Text>Postal Code: {this.state.company.address.postal_code}</Text>
            <Text>City: {this.state.company.address.city}</Text>
            <Text>State: {this.state.company.address.state}</Text>
            <Text>Country: {this.state.company.address.country}</Text>
          </View>
        );
      }
}


export default withNavigation(DetailScreen);
