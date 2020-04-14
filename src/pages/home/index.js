import React,{PureComponent} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from'./style'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Write from './component/Write'
import axios from 'axios';
import { actionCreators } from './store';
import {connect} from "react-redux";
import {BackTop} from './style'
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Home extends PureComponent{
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }


    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft >
                    <img alt='' className='banner-img' src = "//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>

                </HomeLeft>
                <Recommend/>
                <Write/>
                <HomeRight>
                    {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
                </HomeRight>

            </HomeWrapper>

        )
    }
}
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
    const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>50){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState,mapDispatch)(Home)