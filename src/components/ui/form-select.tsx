import {Form, Select} from "antd";
import {RuleObject, RuleRender} from "rc-field-form/lib/interface";


export interface IFormSelectValue {
    value: string,
    label: string,
    disabled?: boolean
}

interface IFormSelect {
    name: string,
    label: string,
    defaultValue?: Pick<IFormSelectValue, "value" | "label">
    options: IFormSelectValue[]
    onChange?: ((value: Pick<IFormSelectValue, "value" | "label">, option: (IFormSelectValue | IFormSelectValue[])) => void) | undefined,
    mode?: "multiple" | "tags" | undefined,
    placeholder?: string,
    rules?: RuleObject[] | RuleRender[]
}

export default function FormSelect({
                                       name,
                                       label,
                                       onChange,
                                       defaultValue,
                                       options,
                                       mode,
                                       placeholder,
                                       rules
                                   }: IFormSelect) {
    return <Form.Item name={name} label={label} rules={rules}>
        <Select
            key={name}
            mode={mode}
            defaultValue={defaultValue}
            style={{width: "100%"}}
            onChange={onChange}
            options={options}
            allowClear={true}
            placeholder={placeholder}
            labelInValue={true}
        />
    </Form.Item>

}
