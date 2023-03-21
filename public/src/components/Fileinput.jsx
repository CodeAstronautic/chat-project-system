import { UploadOutlined } from '@ant-design/icons';
import { border } from '@mui/system';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const Fileinput = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />} style={{
        backgroundColor:"transparent",
        color:'white',
        border:"none"
    }}></Button>
  </Upload>
);
export default Fileinput