import React from 'react'
import styles from './style.less'
import { withRouter } from 'dva/router'
import { Input, InputNumber, message, Select, Button } from 'antd'
import ProductTag from './components/tag/index'
import UpSingleImg from '../../components/upsingleimg'
import MultipleImgs from '../../components/upMultipleImgs'
import Filter from '../../components/filter'
import { addProduct } from '../../services/aidoulist'
import { connect } from 'dva'
const Option = Select.Option
const { TextArea } = Input
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    ediot: (id) => {
      dispatch({
        type: 'list/ediot',
        id: id
      })
    }
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class AddProduct extends React.Component {
  constructor() {
    super ()
    this.state = {
      addProduct: {
        attributes: {"品种":"牛油果","产地":"北京八维"},
        count: '',
        details: '',
        img: '',
        imgList: [],
        name: '',
        origPrice: '',
        price: '',
        status: '',
        volume: '',
        tag: [],
        categoryId: ''
      }
    }
  }
  componentDidMount () {
    this.isEdiot()
  }
  componentWillReceiveProps () {
    if (this.props.list.ediotDetail) {
      const list = this.props.list.ediotDetail
      this.setState({
        addProduct: {
          ...this.state.addProduct,
          attributes: list.attributes,
          count: list.count,
          details: list.details,
          img: list.img,
          imgList: list.imgList,
          name: list.name,
          origPrice: list.origPrice,
          price: list.price,
          status: list.status,
          volume: list.volume,
          categoryId: list.categoryId
        }
      })
    }
  }
  watch () {
    addProduct = (newVal) => {
      if(sessionStorage.getItem('ediot')) {
        console.log('嗯是的')
      }
    }
  }
  isEdiot = () => {
    if(sessionStorage.getItem('ediot')) {
      let { id } = JSON.parse(sessionStorage.getItem('ediot'))
      this.props.ediot(id)
    }
  }
  tags = (val) => {
    this.setState({
      addProduct: {
        ...this.state.addProduct,
        tag: val
      }
    })
  }
  iptChange = (e, val) => {
    this.setState({
      addProduct: {
        ...this.state.addProduct,
        [val]: e
      }
    })
  }
  valChange  = (e, val) => {
    this.setState({
      addProduct: {
        ...this.state.addProduct,
        [val]: e.target.value
      }
    })
  }

  singleImg = (val) => {
    this.setState({
      addProduct: {
        ...this.state.addProduct,
        img: val
      }
    })
  }
  multipleImg = (val) => {
    val = val.map((item, index) => {
      if (item.response) {
       return item.response.url
      }
    })
    if (val.length !==0 ) {
      this.setState({
        addProduct: {
          ...this.state.addProduct,
          imgList: val
        }
      })
    }
  }
  onChange = (id) => {
    this.setState({
      addProduct: {
        ...this.state.addProduct,
        categoryId: id
      }
    })
  }
  sureAdd = () => {
    addProduct(this.state.addProduct).then((res) => {
      if (res.data.code === 1) {
        this.props.history.push('/artboard/list')
      } else {
        message.error('商品添加错误')
      }
    })
  }
  render () {
    const { name, count, details, img, imgList, origPrice, price, status, volume, categoryId } = this.state.addProduct
    return (
      <div className={styles.addProductBox}>
        <div className={styles.baseMegBox}>
          <h2 className={styles.baseTit}>基本信息</h2>
          <div className={styles.name}>
            <label htmlFor="productName">商品分类id</label>
            <Input placeholder="请输入商品名称" value={name} onChange={(e) => {this.valChange(e, 'name')}}  className={styles.ipt} id="productName" />
          </div>
          <div className={styles.name}>
          <label>商品名称</label>
            <Filter onChange={this.onChange} />
          </div>
          <div className={styles.name}>
            <label>商品标签</label>
            <ProductTag tags={this.tags} />
          </div>
          <div className={styles.name}>
            <label>原价</label>
            <InputNumber min={0} step={1} defaultValue={price*1} onChange={(e) => {this.iptChange(e, 'price')}} />
            <label  className={styles.rightLable}>售价</label>
            <InputNumber min={0} step={1} defaultValue={origPrice*1} onChange={(e) => {this.iptChange(e, 'origPrice')}} />
          </div>
          <div className={styles.name}>
            <label>数量</label>
            <InputNumber min={0} step={1} defaultValue={count*1} onChange={(e) => {this.iptChange(e, 'count')}} />
            <label className={styles.rightLable}>销售量</label>
            <InputNumber min={0} step={1} defaultValue={volume*1}  onChange={(e) => {this.iptChange(e, 'volume')}} />
          </div>
          <div className={styles.name}>
            <label>出售状态</label>
            <Select defaultValue={status*1} style={{ width: 120 }} onChange={(e) => {this.iptChange(e, 'status')}}>
              <Option value={0}>0</Option>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
            </Select>
          </div>
          <div className={styles.name}>
            <label>商品图片</label>
            <UpSingleImg singleImg={this.singleImg} />
          </div>
          <div className={styles.name}>
            <label>商品详情图片</label>
            <MultipleImgs multipleImg={this.multipleImg} />
          </div>
          <div className={styles.name}>
            <label>商品详情</label>
            <TextArea rows={4} value={details} onChange={(e) => this.valChange(e, 'details')} />
          </div>
        </div>
        <Button type="primary" onClick={this.sureAdd}>添加商品</Button>
      </div>
    )
  }
}
export default AddProduct