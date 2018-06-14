/**
 * mine tab 中所有scene配置
 * Created by 张冬 on 2017-12-03.
 */

'use strict';

import store from './store';

// import all scenes of mine tab

import minePage from '../../scenes/mine/minePage';
import detailPage2 from '../../scenes/mine/detailPage2';

const minePageItems = [
    { key: store.MINE_PAGE, component:minePage, title: '我的' },
    { key: store.MINE_DETAILPAGE, component:detailPage2, title :'详情2' },
];

export { minePageItems };
