// import * as actiontypes from './actionTypes'
import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
 topicList:[],
    articleList:[],
    recommendList: [],
    articlePage:1,
    showScroll:false,
});
const changeHomeDate = (state,action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}
const addArticleList = (state,action) =>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}
//纯函数
export default (state= defaultState,action) => {
    switch ((action.type)) {
        case constants.CHANGE_HOME_DATA:
            // return state.merge({
            //     topicList: fromJS(action.topicList),
            //     articleList: fromJS(action.articleList),
            //     recommendList: fromJS(action.recommendList)
            // })
            return changeHomeDate(state,action)
        case constants.ARTICLE_LIST:
            // return state.merge({
            //     'articleList':state.get('articleList').concat(action.list),
            //     'articlePage': action.nextPage
            // });
            return addArticleList(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
    // if (action.type === actiontypes.SEARCH_FOCUS){
    //     return state.set('focused',true)
    //     // {
    //     //     focused:true
    //     // };
    // }
    // if (action.type === actiontypes.SEARCH_BLUR){
    //     return state.set('focused',false)
    //     // {
    //     //     focused: false
    //     // }
    // };
    // if(action.type ===actiontypes.CHANGE_LIST){
    //     return state.set('list',action.data)
    // }
    // return state;
}
