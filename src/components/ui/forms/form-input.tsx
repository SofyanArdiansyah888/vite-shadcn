import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control, FieldValues} from "react-hook-form";

type TFormInput = {
    label: string,
    placeholder?: string,
    name: string
    type?: React.HTMLInputTypeAttribute,
    control: Control<any>
}
export default function FormInput({label, placeholder, name, control,type = "text"}: TFormInput) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} type={type} {...field} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
}
