/**
 * home tab 中所有scene配置
 * Created by 张冬 on 2017-12-03.
 */

'use strict';

import store from './store';

// import all scenes of home tab

import homePage from '../../scenes/home/homePage';
import detailPage1 from '../../scenes/home/detailPage1';

const homePageItems = [
    { key: store.HOME_PAGE, component:homePage, title: '首页' },
    { key: store.HOME_DETAILPAGE, component:detailPage1, title :'详情1' },
];

export {homePageItems};
