import React from 'react';
import {
  Text,
  View,
  requireNativeComponent,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';

const GraphView = requireNativeComponent("GraphView");

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company', 'Company Details').company_name,
    };
  };

  constructor(props) {
    super(props);

    var tempXValues = new Array();
    var tempYValues = new Array();

    var monthly_revenue = props.navigation.getParam('company').monthly_revenue

    for (var index = 0; index < monthly_revenue.length; index++) {
      var current_revenue = monthly_revenue[index];
      tempYValues.push(current_revenue.revenue);
      var currentDate = new Date(current_revenue.year, current_revenue.month, 1);
      tempXValues.push(currentDate.toLocaleString('default', { month: 'short' }));
    }

    this.state = {
      company: props.navigation.getParam('company'),
      xValues: tempXValues,
      yValues: tempYValues
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Company Name: {this.state.company.company_name}</Text>
        <Text>Street: {this.state.company.address.street}</Text>
        <Text>Postal Code: {this.state.company.address.postal_code}</Text>
        <Text>City: {this.state.company.address.city}</Text>
        <Text>State: {this.state.company.address.state}</Text>
        <Text>Country: {this.state.company.address.country}</Text>
        <GraphView style={styles.chart}
          xValues={this.state.xValues}
          yValues={this.state.yValues}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    padding: 10,
    fontSize: 18,
    height: 320,
    width: 320,
  },
});

export default withNavigation(DetailScreen);
