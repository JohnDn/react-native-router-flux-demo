/**
 * app router config
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
    Scene,
    Router,
    Stack,
    Tabs,
    Modal,
    ActionConst,
    Lightbox
} from 'react-native-router-flux';

import homePage from './scenes/home/homePage';
import minePage from './scenes/mine/minePage';
import rootScenes from './config/rootScenesConfig';

// import { homePageItems } from './config/home/homeScenes';
// import { minePageItems } from './config/mine/mineScenes';

import { imageStore } from './images';

import tabIcon from './component/tabbar/tabIcon';
import navbar from './component/navbar/navbar';

var normalColor = '#999999';
var selectedColor = '#27a1e5';

// 统一设置scene style
const sceneStyle = () => ({
    backgroundColor: '#ffffff'
});

export default class router extends Component {

    constructor(props) {
        super(props);
    }
//#param mark --------------网络请求--------------


//#param mark --------------Actions--------------    


//#param mark --------------UI渲染--------------    

    _configHomeStack() {
        let homeTitle = '首页';

        let normalImage = imageStore.homeImages.TABBAR_HOME_NORMAL;
        let selectedImage = imageStore.homeImages.TABBAR_HOME_SELECTED;

        return (
            <Stack
                key='homeTab'
                title={homeTitle}
                navBar={navbar}
                image={normalImage}
                selectedImage={selectedImage}
                headerMode='screen'
                normalColor={normalColor}
                selectedColor={selectedColor}
            >
                {/* 首页-component替换为实际的首页组件 */}
                <Scene
                    key='homePage'
                    component={homePage}
                    title={homeTitle}
                    hideNavBar
                    hiddenLeftButton
                    onEnter={() => {
                        Actions.refresh({
                            hideTabBar: false
                        });
                    }}
                    onExit={() => {
                        Actions.refresh({
                            hideTabBar: true
                        });
                    }}
                >
                </Scene>

            </Stack>
        )
    }

    _configMineStack() {
        let mineTitle = '我的';

        let normalImage = imageStore.mineImages.TABBAR_MINE_NORMAL;
        let selectedImage = imageStore.mineImages.TABBAR_MINE_SELECTED;

        return (
            <Stack
                key='userTab'
                title={mineTitle}
                navBar={navbar}
                image={normalImage}
                selectedImage={selectedImage}
                headerMode='screen'
                normalColor={normalColor}
                selectedColor={selectedColor}
            >
                {/* 我的-component替换为实际的我的组件 */}
                <Scene
                    key='minePage'
                    component={minePage}
                    title={mineTitle}
                    hiddenLeftButton
                    onEnter={() => {
                        Actions.refresh({
                            hideTabBar: false
                        });
                    }}
                    onExit={() => {
                        Actions.refresh({
                            hideTabBar: true
                        });
                    }}
                >
                </Scene>
            </Stack>
        )
    }

    _appRouter() {

        return(
            <Router getSceneStyle={sceneStyle}>
                {/* <Modal key="modal" hideNavBar>
                    <Lightbox key='lightbox'> */}
                        <Stack key='root' hideNavBar>
                            <Stack key='Scenes' navBar={navbar} headerMode='screen'>
                                <Tabs
                                    key="tabbar"        // 唯一标识
                                    hideNavBar
                                    wrap={true}         // 自动使用自己的导航栏包装每个场景
                                    showLabel={false}   // 显示文字
                                    tabBarStyle={styles.tabBarStyle} // tabBar的样式
                                    swipeEnabled={false}// 是否可以滑动
                                    headerMode='screen' // 页面切换方式
                                    icon={tabIcon}      // 自定义Icon显示方式
                                    lazy={true}         // 是否默认渲染tabbar
                                    tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                                    activeBackgroundColor='white'   // 选中tabbar的背景色
                                    inactiveBackgroundColor='white' // 未选中tabbar的背景色
                                >
                                    {this._configHomeStack()}
                                    {this._configMineStack()}
                                </Tabs>
                                {rootScenes.getAllScenes()}
                            </Stack>
                        </Stack>
                    {/* </Lightbox>
                </Modal> */}
            </Router>
        )
    }

    render() {
        // 配置APP路由
        let route = this._appRouter();

        return route;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

