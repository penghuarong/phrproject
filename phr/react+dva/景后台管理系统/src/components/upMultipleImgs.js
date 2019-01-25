import React from 'react'
import { Upload, Icon, Modal } from 'antd';

class MultipleImgs extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  }
  handleCancel = () => this.setState({ previewVisible: false })
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList })
    this.props.multipleImg(fileList)
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100px' }} src={previewImage} />
        </Modal>
        <Upload
          action="/api/admin/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {uploadButton}
        </Upload>
      </div>
    );
  }
}
export default MultipleImgs