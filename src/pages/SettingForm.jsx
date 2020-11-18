
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';
import { Layout, Menu, Breadcrumb,Button} from 'antd';


export default function SettingForm({onFormCallBack}){
    const [form] = Form.useForm();
    const onFinish = (values)=>{
        //提交数据
        onFormCallBack(values)
        console.log(values)
    }

    const formItemLayout = {
        labelCol: {
          xs: { span: 20 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
      };

      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

      const onReset =()=> {
        form.resetFields();
      }


      return(  
        <Form {...formItemLayout} form = {form} onFinish = {onFinish} style={{  marginRight: "8px"}}>
            <Form.Item name="name" label="维度名称" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="creator" label="创建人" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="维度描述" rules={[{ required: true }]}>
                <Input.TextArea style={{height:"150px"}}/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            
            </Form.Item>
                            
        </Form>
)

      

}