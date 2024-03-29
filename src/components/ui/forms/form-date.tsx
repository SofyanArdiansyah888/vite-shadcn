import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";

type TFormInput = {
    label: string,
    placeholder?: string,
    name: string
    control: Control<any>
}
export default function FormDate({label, placeholder, name, control}: TFormInput) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} type={"date"} {...field} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
}
