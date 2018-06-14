/**
 * 我的页面
 * Created by 张冬 on 2018-06-13.
 */

'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { sceneKeysStore } from '../../config';

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
                <TouchableOpacity style={{width: 100,height: 100,marginLeft: 100,marginTop: 50,backgroundColor: '#FFFFFF'}} onPress={() => {
                    Actions.push(sceneKeysStore.mineKeys.MINE_DETAILPAGE)
                }}>
                    <Text>详情2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e4e4'
    }
});

