import {DatePicker, Form} from "antd";
import {RuleObject, RuleRender} from "rc-field-form/lib/interface";


interface IFormSelect {
    name: string,
    label: string,
    value?: string,
    onChange?: any,
    type?: "date" | "time" | "week" | "month" | "quarter" | "year",
    showTime?: boolean,
    rules?: RuleObject[] | RuleRender[]
}

export default function FormDate({
                                     name,
                                     label,
                                     onChange,
                                     rules,
                                     type = "date",
                                     value,
                                     showTime = false,
                                 }: IFormSelect) {
    function getFormat() {
        let format: string[];
        switch (type) {
            case "date":
                format = ['DD-MM-YYYY'];
                break;
            default:
                format = ["hh:mm:ss"]
                break;
        }
        return format;
    }

    return <Form.Item name={name} label={label} rules={rules} className={"!capitalize"}>
        <DatePicker
            showTime={showTime}
            picker={type}
            onChange={onChange}
            value={value}
            format={getFormat()}
            placeholder={""}
            className={"!w-full"}/>
    </Form.Item>
}
