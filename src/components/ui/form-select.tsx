import {Label} from "@/components/ui/label.tsx";
import {Select} from "antd";

interface IFormSelect {
    label: string
    defaultValue: string
    options: { value: string, label: string }[]
    onChange?: any
}

export default function FormSelect({label, onChange, defaultValue}: IFormSelect) {
    return <div className={"space-y-1"}>
        <Label>{label}</Label>
        <Select
            defaultValue={defaultValue}
            style={{width: "100%"}}
            onChange={onChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />
    </div>
}
