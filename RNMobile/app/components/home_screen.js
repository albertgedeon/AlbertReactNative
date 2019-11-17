import React from 'react';
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
    ActivityIndicator,
} from 'react-native';
import NetworkRequest from '../services/network_request';
import FlatListItem from './flat_list_item';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Companies',
    };

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

    FlatListItemSeparator = () => <View style={styles.line} />;

    render() {
        if (this.state.loading) {
            return (
                <SafeAreaView>
                    <View style={[styles.activityIndicatorContainer, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </SafeAreaView>
            )
        }
        else {
            return (
                <SafeAreaView>
                    <FlatList
                        data={this.state.dataSource}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) => <FlatListItem item={item} />}
                        keyExtractor={item => item.id.toString(10)}
                    />
                </SafeAreaView>
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