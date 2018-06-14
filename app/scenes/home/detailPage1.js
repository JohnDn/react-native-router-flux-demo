/**
 * 详情页面1
 * Created by 张冬 on 2018-06-13.
 */

'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    AppRegistry
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

export default class MyComponent extends Component {

    static propTypes = {
        // props: React.PropTypes.
    }

    static defaultProps = {
        
    }

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

//#param mark --------------网络请求--------------


//#param mark --------------Actions--------------    


//#param mark --------------UI渲染--------------    


    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

