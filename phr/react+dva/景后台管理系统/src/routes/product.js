import React from 'react'
import { Button, Table } from 'antd'
import { connect } from 'dva'
import ShowModal from '../components/modal'
import productStyles from './product.css'

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      name: '',
      email: '',
      webskit: ''
    }
  }
  addMesg = () => {
    console.log('添加信息')
    this.setState({
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  handleOk = () => {
   console.log('ok')
  }
  changeName = (val) => {
    this.setState({
      name: val
    })
  }
  changeEmail = (val) => {
    this.setState({
      email: val
    })
  }
  changewebsit = (val) => {
    this.setState({
      webskit: val
    })
  }
  render () {
    const {list, columns} = this.props.product
    const  loading = this.props.loading.models.list
    const { visible, name, email, webskit, total } = this.state
    const pagination = {
            total: total,
            pageSize: 5
          }
    return (
      <div className={productStyles.productWrap}>
        <div className={productStyles.productTop}></div>
        <div className={productStyles.productContent}>
          <ShowModal
            visible={visible}
            name={name}
            email={email}
            webskit={webskit}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
            changeName={this.changeName}
            changeEmail={this.changeEmail}
            changewebsit={this.changewebsit}
            ></ShowModal>
          <Button type="primary" onClick={this.addMesg}>Create User</Button>
          <Table loading={loading} pagination={pagination} className={productStyles.tableStyles} dataSource={list} columns={columns}  size="middle" />
        </div>
      </div>
    )
  }
}

export default connect((mapStateToProps) => {
  return mapStateToProps
})(Product)
