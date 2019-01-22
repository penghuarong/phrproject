import React from 'react'
import { getFilter } from '../services/aidoulist'
import { Cascader } from 'antd'
class Filter extends React.Component {
  constructor () {
    super ()
    this.state = {
      options: []
    }
  }
  componentDidMount () {
    this.getFilterData()
  }
  getFilterData () {
    getFilter().then((res) => {
      this.setState({
        options: this.dataToList(res.data.data)
      })
    })
  }
  dataToList = (data) => {
    return data.map((item) => {
      return {
        ...item,
        value:item.categoryName,
        label: item.categoryName,
        children: this.dataToList(item.children)
      }
    })
  }
  onChange = (value, selectedOptions) => {
    this.props.onChange(selectedOptions[selectedOptions.length-1].categoryId)
  }
  render () {
    const { options } = this.state
    return(
      <Cascader options={options} onChange={this.onChange} changeOnSelect />
    )
  }
}

export default Filter
