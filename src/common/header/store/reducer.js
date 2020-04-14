import * as actiontypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
    list:[],
    page: 1,
    totalPage:1,
    mouseIn:false
})

//纯函数
export default (state= defaultState,action) => {
    switch (action.type) {
        case actiontypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actiontypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actiontypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actiontypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actiontypes.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case actiontypes.CHANGE_PAGE:
            return state.set('page',action.page);
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
