import {Form, Input, InputNumber} from "antd";
import {RuleObject, RuleRender} from "rc-field-form/lib/interface";


export interface IFormSelectValue {
    value: string,
    label: string,
    disabled?: boolean
}

interface IFormSelect {
    type?: string,
    name: string,
    label: string,
    value?: string,
    onChange?: any,
    placeholder?: string,
    rules?: RuleObject[] | RuleRender[]
}

export default function FormInput({
                                      name,
                                      label,
                                      onChange,
                                      placeholder,
                                      rules,
                                      value,
                                      type = "text"
                                  }: IFormSelect) {
    return <Form.Item name={name} label={label} rules={rules}>
        {
            type === "number" ?
                <InputNumber className={"w-full"} onChange={onChange} placeholder={placeholder} value={value}/> :
                <Input onChange={onChange} placeholder={placeholder} value={value}/>
        }
    </Form.Item>

}
