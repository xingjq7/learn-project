import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom'
import {HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Btn,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList

} from './style'

class Header extends Component{
    constructor(props){
        super(props)

    }
    handleSearch(){

    }
    getListArea(){
        const {focused,list,page,mouseIn,totalPage} =this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page - 1) * 10 ; i< page * 10 ; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused||mouseIn){
            return(
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave = {this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>this.props.handleChangePage(page,totalPage,this.spinIcon)}>
                            <span ref={(icon)=>{this.spinIcon= icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}

                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }

    render(){
        const {focused,list,login} =this.props
        return(
            <div>

                <HeaderWrapper>
                    <Link to='/'>
                    <Logo/>
                    </Link>
                    <Nav>
                    <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        {login?<NavItem className='right' onClick={this.props.logout}>退出</NavItem>:
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                        }
                        {/*<NavItem className='right'>登陆</NavItem>*/}
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide"
                            >
                        <NavSearch
                            onFocus={()=>this.props.hanleInputFocus(list)}
                            onBlur={this.props.handleInputBlur}
                            className={focused?'focused':''}>
                        </NavSearch>
                            </CSSTransition>
                        <span className={focused?'focused iconfont zoom':'iconfont zoom'} >&#xe688;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                        <Btn className='writting'>
                            <span className="iconfont">&#xe6e5;</span>
                            写文章
                        </Btn>
                        </Link>
                        <Btn className='reg'>注册</Btn>

                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login']),
    }
}
const mapDispathToProps =(dispatch)=>{
    return{
        hanleInputFocus(list){
            console.log(list);
            (list.size === 0)&&dispatch(actionCreators.getList())
            // if(list.size === 0){
            //     dispatch(actionCreators.getList());
            // }
            // (list.size === 0) &&dispatch(actionCreators.getList())
            // dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus())
            // if(list.size>0){
            //
            // dispatch(actionCreators.searchFocus());
            // }
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){


            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else {
                dispatch(actionCreators.changePage(1))
            }

        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);