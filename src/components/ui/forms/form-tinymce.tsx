import {Editor} from "@tinymce/tinymce-react";
import {Control} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

type TFormInput = {
    label: string,
    placeholder?: string,
    name: string
    control: Control<any>
}
export default function FormTinymce({control, name, label}: TFormInput) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Editor
                        apiKey='gbjemyas0z3n2flirjn0ah2hshhud1f5ko4rmak1rislrdwj'
                        init={{
                            plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                {value: 'First.Name', title: 'First Name'},
                                {value: 'Email', title: 'Email'},
                            ],
                            ai_request: (request: any, respondWith: {
                                string: (arg0: () => Promise<never>) => any;
                            }) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                        }}
                        {...field}
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
}
