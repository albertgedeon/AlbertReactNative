import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';
import NetworkRequest from '../services/network_request';
import FlatListItem from './flat_list_item';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: null,
            loading: true,
            dataSource: [],
            error: null,
        };
    }

    async componentDidMount() {
        let requestor = new NetworkRequest();
        this.setState({ dataSource: await requestor.getCompanyInfo() })
        this.setState({ loading: false });
    }

    companySelected(item) {
        console.log("company")
        // this.props.navigation.push('Details')
    }

    selectableItem({item}) {
        return (
            <TouchableHighlight
            onPress={() => {
                console.log(item.company_name)
            }}
			underlayColor='yellow'>
			<View>
				<Text style={styles.item}>{ item.company_name }</Text>
			</View>
		</TouchableHighlight>
        );
    }

    FlatListItemSeparator = () => <View style={styles.line} />;

    render() {
        if (this.state.loading) {
            return (
                <View style={[styles.activityIndicatorContainer, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        else {
            return (
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    // renderItem = {({ item }) => <this.selectableItem item={item}/>}
                    renderItem = {({ item }) => <FlatListItem item={item}/>}
                    keyExtractor={item => item.id.toString(10)}
                />
            );
        }
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
    },
    line: {
        height: 0.5,
        width: "100%",
        backgroundColor: "rgba(0,0,255,1)"
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})