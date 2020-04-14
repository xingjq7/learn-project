import React,{PureComponent} from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect}from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
class List extends PureComponent{
    render() {
        const {list,page} = this.props
        return(
            <div>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                            <ListItem >
                                <img alt='' className = 'pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick = {()=>this.props.getMoreList(page)}>
                    更多文字
                </LoadMore>
            {/*<ListItem>*/}
                {/*<img className = 'pic' src='//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240' />*/}
            {/*<ListInfo>*/}
                {/*<h3 className='title'>胡歌12年后首谈车祸</h3>*/}
                {/*<p className='desc'>文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...</p>*/}
            {/*</ListInfo>*/}
            {/*</ListItem>*/}
            </div>
        )
    }
}
const mapState = (state)=>({
    list:state.get('home').get('articleList'),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch)=>({
    getMoreList(page){
    dispatch(actionCreators.getMoreList())
    }
})
export default connect(mapState,mapDispatch)(List)