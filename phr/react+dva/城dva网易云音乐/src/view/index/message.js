import React, { Component } from 'react';
import {connect} from 'dva'
class Message extends Component {
    componentDidMount () {
        let {dispatch,id} =this.props;
        dispatch({
            type:'messageStore/getMymessage',
            id:id
        })
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps.id,this.props.id)
    }
    render() {
        let {messageData} =this.props;
        return (
            <div>
                {messageData.avatarUrl && <img src={messageData.avatarUrl} alt=""/>}
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {...state.messageStore}
}
export default connect(mapStateToProps)(Message);