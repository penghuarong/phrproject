import React,{Component} from 'react';
import { Input,Modal,Upload,Icon,Button} from 'antd';
import {getAddList} from "../services/users";
import styles from "./home.css";
import {Link} from "dva/router"
const { TextArea } = Input;
class addUser extends Component{
    constructor(props){
        super(props)
        this.state={
            previewVisible: false,
            previewImage: '',
            img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209952248,881174830&fm=27&gp=0.jpg",
            fileList: []
        }
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    }
    handleChange = ({ fileList }) =>{
        this.setState({
            fileList,
            img:fileList.map((item,index)=>{
                if(item.response){
                    // console.log(item.response.url,99999999)
                    return item.response.url
                }
            })
        })
    } 
    sureAdd(){
        getAddList({
          name:this.refs.name.state.value,
          img:this.state.img,
          imgList:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209952248,881174830&fm=27&gp=0.jpg",
          origPrice:this.refs.origPrice.state.value,
          count:this.refs.count.state.value,
          details:this.refs.detail.state.value,
          attributes:{"品种":"牛油果","产地":"北京八维"},
          categoryId:64,
          price:this.refs.origPrice.state.value
        }).then((res)=>{
            if(res.code === 1){
                this.props.history.push('/users')
            }
          console.log(res,7777)
        })  
    }
    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        )
        return(
            <div>
                <div className="clearfix">
                    <Upload
                    action="/api/admin/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                    {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <label className={styles.msg}>
                    <span>名称：</span>
                    <Input placeholder="请输入name" ref="name"/>
                </label>
                <label className={styles.msg}>
                    <span>原价：</span>
                    <Input placeholder="请输入origPrice" ref="origPrice"/>
                </label>
                <label className={styles.msg}>
                    <span>现价：</span>
                    <Input placeholder="请输入price" ref="price"/>
                </label>
                <label className={styles.msg}>
                    <span>库存：</span>
                    <Input placeholder="请输入count" ref="count"/>
                </label>
                <label className={styles.msg}>
                    <span>详情：</span>
                    <TextArea rows={4} placeholder="请输入detail" ref="detail"/>
                </label> 
                <Link to="/"><Button type="primary">确认添加</Button></Link>
            </div>    
        )
    }
}
export default addUser