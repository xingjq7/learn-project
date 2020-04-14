import axios from "axios";
import * as constants from './constants'
import {fromJS} from "immutable";

const changeHomeData=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
export const getHomeInfo =() => {
    return (dispatch)=>{
        axios.get('./api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result)
            dispatch(action)
            // this.props.changeHomeData(action)
        })

    }
}
export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('./api/homeList.json?page='+page).then((res)=>{
            const result = res.data.data;
            const action = addHomeList(result,page + 1)
            dispatch(action)
            // this.props.changeHomeData(action)
        })

    }
}
const addHomeList = (list,nextPage)=>({
    type:constants.ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})
export const toggleTopShow =(show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})