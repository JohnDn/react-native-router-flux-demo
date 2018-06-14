/**
 * root scenes config
 * Created by 张冬 on 2018-06-14.
 */

'use strict';

import React from 'react';

import {
    Scene,
} from 'react-native-router-flux';

import { homePageItems } from './home/homeScenes';
import { minePageItems } from './mine/mineScenes';

export default {
    // [供外部使用API] 获取所有的页面场景
    getAllScenes() {

        // 获取所有的页面
        let allPages = this._getPages();

        return this._makeAllScenes(allPages);
    },

    // 获取所有的页面
    _getPages() {

        let allPages = [...homePageItems, ...minePageItems];

        return allPages;
    },

    // 创建所有的scenes
    _makeAllScenes(allPages) {
        return allPages.map((item, index) => {
            return <Scene {...item} hideNavBar={item.hideNavBar} />
        });
    }
}
