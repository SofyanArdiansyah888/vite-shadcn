import {Button, Form, Upload} from "antd";
import {UploadIcon} from "lucide-react";

export default function FormUpload(){
    return     <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        // getValueFromEvent={normFile}
        // extra="longgggggggggggggggggggggggggggggggggg"
    >
        <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadIcon strokeWidth={1} className={"w-3 h-3"} />}>Pilih Foto</Button>
        </Upload>
    </Form.Item>
}
