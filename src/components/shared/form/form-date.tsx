import {DatePicker, Form} from "antd";
import {RuleObject, RuleRender} from "rc-field-form/lib/interface";


interface IFormSelect {
    name: string,
    label: string,
    value?: string,
    onChange?: ((date: string, dateString: (string | string[])) => void) | undefined,
    type?: "date" | "time" | "week" | "month" | "quarter" | "year",
    showTime?: boolean,
    rules?: RuleObject[] | RuleRender[],
    disabled?: boolean
}

export default function FormDate({
                                     name,
                                     label,
                                     onChange,
                                     rules,
                                     type = "date",
                                     value,
                                     showTime = false,
                                     disabled = false
                                 }: IFormSelect) {
    function getFormat() {
        let format: string[];
        switch (type) {
            case "time":
                format = ["hh:mm:ss"]
                break;
            case "month":
                format = ['MM-YYYY']
                break;
            default:
                format = ['DD-MM-YYYY'];
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
            disabled={disabled}
            className={"!w-full"}/>
    </Form.Item>
}
