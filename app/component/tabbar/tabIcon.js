/**
 * 自定义TabBar
 * Created by 张冬 on 2018-02-01.
 */

'use strict';

import React, { PureComponent } from 'react';

import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

export default class TabIcon extends PureComponent {

    static propTypes = {
        normalColor: React.PropTypes.string,
        selectedColor: React.PropTypes.string
    }

    static defaultProps = {
        normalColor: '#999999',
        selectedColor: '#27a1e5'
    }
    
    render() {

        const { focused, image, selectedImage, title, normalColor, selectedColor } = this.props;

        let source = !focused ? image : selectedImage;

        if (typeof image === 'string' && typeof selectedImage === 'string') {

            source = !focused ? {uri:image} : {uri:selectedImage}
        }

        return(
            <View style={styles.container}>
                <Image
                    source={source}
                    style={styles.tabIcon}
                />
                <Text
                    style={[styles.tabLabel,{color: !focused ? normalColor : selectedColor}]}
                >
                    {title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width / 4,
        alignItems: 'center',
    },
    tabIcon: {
        height:25,
        width:25,
        marginTop:5 
    },
    tabLabel: {
        marginTop:6,
        fontSize:10,
    }
});

