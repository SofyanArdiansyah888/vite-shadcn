import {DatePicker, Form} from "antd";
import {RuleObject, RuleRender} from "rc-field-form/lib/interface";


interface IFormSelect {
    name: string,
    label: string,
    value?: string,
    onChange?: any,
    rules?: RuleObject[] | RuleRender[]
}

export default function FormDate({
                                     name,
                                     label,
                                     onChange,
                                     rules,
                                     value
                                 }: IFormSelect) {
    return <Form.Item name={name} label={label} rules={rules}>
        <DatePicker
            onChange={onChange}
            needConfirm
            value={value}
            format={['DD-MM-YYYY']}
            className={"!w-full"}/>
    </Form.Item>

}
