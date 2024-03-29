import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Control} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";

type TFormInput = {
    label: string,
    placeholder?: string,
    name: string
    control: Control<any>
}
export default function FormTextarea({label, placeholder, name, control}: TFormInput) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        className="resize-none"
                        {...field}
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
}
