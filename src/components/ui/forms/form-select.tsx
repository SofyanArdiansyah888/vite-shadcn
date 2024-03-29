import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Control} from "react-hook-form";

type TFormInput = {
    label: string,
    placeholder?: string,
    name: string
    control: Control<any>,
    items: { label: string, value: string }[]
}
export default function FormSelect({control, name, label, items, placeholder}: TFormInput) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder}/>
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {
                            items.map((item, index) => <SelectItem value={item.value}
                                                                   key={index}>{item.label}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
                <FormMessage/>
            </FormItem>
        )}
    />
}
