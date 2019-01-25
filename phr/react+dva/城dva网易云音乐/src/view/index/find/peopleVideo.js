import React, { Component } from 'react';
import {connect} from 'dva';
import {NavLink} from 'dva/router'
import Banner from '../../../components/banner';
import styles from '../../../style/IndexPeopleVideo.scss'
class PeopleVideo extends Component {
    //触发库里函数 得到banner数据
    componentDidMount () {
        let {dispatch} = this.props;
        dispatch({
            type:'peopleVideoStore/getBannerList'
        })
    }
    render() {
        let {BannerList} =this.props;
        return (
            <div className={styles.peopleVideo_wrap}>
                <Banner BannerList={BannerList}/>
                <div className={styles.nav}>
                    <NavLink to=''>
                        <p><img src="./img/icon/FM.png" alt=""/></p>
                        <span>电台分类</span>
                    </NavLink>
                    <NavLink to=''>
                        <p><img src="./img/icon/day.png" alt=""/></p>
                        <span>电台排行</span>
                    </NavLink>
                    <NavLink to=''>
                        <p><img src="./img/icon/songList.png" alt=""/></p>
                        <span>DJ电音</span>
                    </NavLink>
                    <NavLink to=''>
                        <p><img src="./img/icon/List.png" alt=""/></p>
                        <span>小冰电台</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}
const  mapStateToProps = (state) => {
    return {...state.peopleVideoStore}
}
export default connect(mapStateToProps)(PeopleVideo);