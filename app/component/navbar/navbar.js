/**
 * 自定义NavBar
 * Created by 张冬 on 2018-02-01.
 */

'use strict';

import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
    Platform,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { 
    Actions 
} from 'react-native-router-flux';

import { imageStore } from '../../images';

const titleFontSize = 16; //标题字体大小
const accessoryFontSize = 15; //导航栏左右两边按钮字体大小
const edgeOffset = 15; //控件距离边缘距离

//状态栏高度
const ios_status_bar_height = (Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 44 : 20;
const android_status_bar_height = 0;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? android_status_bar_height : ios_status_bar_height;

//导航栏高度
const navHeight = barHeight + STATUS_BAR_HEIGHT;

//导航条高度
const barHeight = Platform.OS === 'android' ? 56 : 44;

//导航条默认背景色
const bgColor = '#f8f8f8';

module.exports = class NavigatorBar extends PureComponent {

    static propTypes = {

        hiddenStatusBar:React.PropTypes.bool, //'是否隐藏了'状态栏，默认false, 只是根据状态栏是否隐藏计算高度，并不会真正去隐藏状态栏
        hiddenIOSLeftTitle:React.PropTypes.bool, //隐藏iOS的"返回"二字
        hiddenLeftButton:React.PropTypes.bool, //隐藏返回按钮，一般在根视图使用

        //title
        title:React.PropTypes.string, //标题
        rightTitle:React.PropTypes.string, //右边标题

        backgroundColor:React.PropTypes.string, //导航栏背景色

        //view
        leftView:React.PropTypes.element, //左边view
        titleView:React.PropTypes.element,  //中间view
        rightView:React.PropTypes.element, //右边view

        //func
        backButtonAction:React.PropTypes.func, //点击返回按钮
        rightButtonAction:React.PropTypes.func, //有点按钮点击
    };

    static defaultProps = {
        hiddenStatusBar:false,
        hiddenIOSLeftTitle:false,
        backgroundColor:bgColor
    };

//#param mark --------------Actions--------------
    //点击左侧按钮
    _leftButtonClick = () => {
        if (this.props.backButtonAction) {
            this.props.backButtonAction(); //如果动作被拦截，那就直接新动作
        } else {
            Actions.pop() //否则，直接pop
        }
    }

    //点击右侧按钮
    _rightButtonClick = () => {
        if (this.props.rightButtonAction) {
            this.props.rightButtonAction(); //如果动作被拦截，那就直接新动作
        }
    }

//#param mark --------------Views--------------
    //状态栏
    _statuBar() {
        return (
            <View style={[styles.statusStyle, {backgroundColor:this.props.backgroundColor}]}/>
        )
    }

    //左侧view
    _leftView() {

        return (
            <View style={{width:80, marginLeft:10, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', backgroundColor:'transparent'}}>
                {
                    this._leftItem()
                }
            </View>
        );
    }

    _leftItem() {
        if (this.props.leftView) {
            return this.props.leftView;
        } else {
            if (this.props.hiddenLeftButton) {
                return null;
            } else {
                return (
                    <TouchableOpacity style={styles.leftButtonStyle}
                                      onPress={this._leftButtonClick}>
                        <Image style={{width:25, height:25}} source={imageStore.navImages.NAVBAR_BACK_ICON} resizeMode='stretch'/>
                        {
                            this._iOSBackTitle()
                        }
                    </TouchableOpacity>
                )
            }
        }
    }

    _iOSBackTitle() {
        if (Platform.OS === 'ios' && !this.props.hiddenIOSLeftTitle) {
            return (
                <Text allowFontScaling={false} style={styles.leftButtonTextStyle}>返回</Text>
            )
        }
    }

    //标题View
    _titleView() {
        return (
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'transparent'}}>
                {
                    this._titleItem()
                }
            </View>
        )
    }

    _titleItem() {
        if (this.props.titleView) {
            return this.props.titleView;
        } if (this.props.title) {
            return (
                <Text allowFontScaling={false} style={styles.middleButtonTextStyle} numberOfLines={1}>{this.props.title}</Text>
            )
        }
    }

    //右侧view
    _rightView() {
        return (
            <View style={{width:80, marginRight:edgeOffset, flexDirection:'row', justifyContent:'flex-end', backgroundColor:'transparent'}}>
                {
                    this._rightItem()
                }
            </View>
        )
    }

    _rightItem() {
        if (this.props.rightView) {
            return this.props.rightView;
        } else if (this.props.rightTitle) {
            return (
                <TouchableOpacity style={styles.rightButtonStyle} onPress={this._rightButtonClick}>
                    <Text allowFontScaling={false} style={styles.rightButtonTextStyle} numberOfLines={1}>{this.props.rightTitle}</Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View style={styles.navStyle}>
                {
                    this.props.hiddenStatusBar
                        ?
                        null
                        :
                        this._statuBar()
                }

                <View style={[styles.barStyle, {backgroundColor: this.props.backgroundColor}]}>
                    {
                        this._leftView()
                    }
                    {
                        this._titleView()
                    }
                    {
                        this._rightView()
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navStyle:{
        marginLeft:0,
        marginTop:0,
        marginRight:0,
        height:navHeight,
    },
    statusStyle:{
        marginLeft:0,
        marginTop:0,
        marginRight:0,
        height:STATUS_BAR_HEIGHT,
        backgroundColor: bgColor,
    },
    barStyle:{
        flexDirection:'row',
        marginLeft:0,
        marginTop:0,
        marginRight:0,
        height:barHeight, //bar的高度,
        alignItems: 'center',
        backgroundColor: bgColor,
        borderBottomWidth: 0.5/PixelRatio.get(),
        borderBottomColor:'#cccccc',
    },
    leftButtonStyle:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    rightButtonStyle: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center'
    },
    middleButtonTextStyle: {
        fontSize: titleFontSize,
        color: 'black',
        fontWeight: '400'
    },
    leftButtonTextStyle: {
        marginLeft:-4,
        fontSize: accessoryFontSize,
        color: '#333333',
        fontWeight: '200'
    },
    rightButtonTextStyle: {
        fontSize: accessoryFontSize,
        color: 'black',
        fontWeight: '200'
    },
});