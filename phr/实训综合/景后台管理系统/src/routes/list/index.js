import React from 'react'
import { Table, Modal, Button  } from 'antd'
import { removeItem } from '../../services/aidoulist.js'
import styles from './style.css'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import Filter from '../../components/filter'
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList: (page, page_size, categoryId) => {
      dispatch({
        type: 'list/fetch',
        action: {
          page,
          page_size,
          categoryId
        }
      })
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class List extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      pagesize:10,
      categoryId: 64,
      ModalText: '确定要删除该商品吗',
      visible: false,
      confirmLoading: false,
      id: null,
      columns: [{
        title: '姓名',
        key: 'name',
        render: (text, record) => (
          <div className={styles.productBox}>
            <img src={record.img} alt=""/>
            <p>{record.name}</p>
          </div>
        )
      }, {
        title: '原价',
        dataIndex: 'origPrice',
        key: 'origPrice'
      }, {
        title: '现价',
        dataIndex: 'price',
        key: 'price'
      }, {
        title: '销售量',
        dataIndex: 'volume',
        key: 'volume'
      },  {
        title: '状态',
        key: 'status',
        render: (text, record) => (
          <div className={styles.opration}>
            {record.status=== '0' ? <span className={styles.status}>上架中</span>:<span  className={styles.status}>已下架</span> }
          </div>
        )
      }, {
        title: '操作',
        key: 'opration',
        render: (text, record) => (
          <div className={styles.opration}>
            <span data-id={record.id} onClick={this.remove}>删除</span>
            <span data-id={record.id} onClick={(e) => {this.editor(e)}}>编辑</span>
          </div>
        )
      }],
      dataList: []
    }
  }
  componentDidMount () {
    this.props.getList(this.state.page, this.state.pagesize, this.state.categoryId)
  }
  pagechange = (page) => {
    this.setState({
      page: page.current
    }, () => {
      this.props.getList(this.state.page, this.state.pagesize, this.state.categoryId)
    })
  }
  editor = (e) => {
    e.stopPropagation()
    sessionStorage.setItem('ediot',JSON.stringify({
      id: e.target.dataset.id,
      editor: true
    }))
    this.props.history.push({
      pathname: '/artboard/addproduct/'
    })
  }
  onRowSelect = (record, index) => {
    return {
      onClick: (e) => {
        this.props.history.push({
          pathname: '/artboard/list/detail/' + record.id
        })
      }
    }
  }
  remove = (e) => {
    e.stopPropagation()
    this.setState({
      visible: true
    })
    this.setState({
      id: e.target.dataset.id
    })
  }
  handleOk = () => {
    this.setState({
      ModalText: '正在删除该商品',
      confirmLoading: true
    }, () => {
      const { id } = this.state
      removeItem(id).then((res) => {
        if (res.data.code===1) {
          this.props.getList(this.state.page, this.state.pagesize, this.state.categoryId)
        }
      })
    })
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      })
    }, 2000)
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  onChange = (id) => {
    this.setState({
      page: 1,
      page_size: 10,
      categoryId: id
    }, () => {
      this.props.getList(this.state.page, this.state.pagesize, this.state.categoryId)
    })
  }
  addProduct = () => {
    sessionStorage.removeItem('ediot')
    this.props.history.push('/artboard/addproduct')
  }
  render () {
    const { columns, pagesize, visible, confirmLoading, ModalText } = this.state
    const { dataList, total } = this.props.list
    const  loading = this.props.loading.models.list
    const Pagination = {
      total,
      pageSize:pagesize
    }
    return (
      <div>
        <div className={styles.filterBox}>
          <Filter onChange={this.onChange} />
          <Button type="primary" onClick={this.addProduct}>添加商品</Button>
        </div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          >
            <p>{ModalText}</p>
          </Modal>
           <Table onChange={this.pagechange} loading={loading} onRow={this.onRowSelect} dataSource={dataList} pagination={Pagination} columns={columns} />
      </div>
    )
  }
}
export default List