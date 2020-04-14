import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from '../style'
class Topic extends PureComponent{
    render() {
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                alt=''/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapState = (state)=>({
    // list:state.get('home').get('topicList')
    list:state.getIn(['home','topicList'])
})
export default connect(mapState,null)(Topic)