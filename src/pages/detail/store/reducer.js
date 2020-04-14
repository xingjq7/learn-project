// import * as actiontypes from './actionTypes'
import {fromJS} from "immutable";
import * as constants from './constants'
const defaultState = fromJS({
    title:'',
    content:''
})

//纯函数
export default (state= defaultState,action) => {
    switch ((action.type)) {
        case constants.CHANGE_DETAIL:
           return state.merge({
               title:action.title,
               content: action.content
           })
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
