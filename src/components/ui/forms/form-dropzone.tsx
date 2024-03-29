// import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
// import {Control} from "react-hook-form";
// import {useDropzone} from "react-dropzone";
//
// type TFormInput = {
//     label: string,
//     placeholder?: string,
//     name: string
//     control: Control<any>
// }
// export default function FormDropzone({label, placeholder, name, control}: TFormInput) {
//     return <FormField
//         control={control}
//         name={name}
//         render={({field}) => (
//             <FormItem>
//                 <FormLabel>{label}</FormLabel>
//                 <FormControl>
//                     {/*<Dropzone {...field} />*/}
//                     <Basic/>
//                 </FormControl>
//                 <FormMessage/>
//             </FormItem>
//         )}
//     />
// }
//
//
// function Basic() {
//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
//
//     // const files = acceptedFiles.map(file => (
//     //     <li key={file.path}>
//     //         {file.path} - {file.size} bytes
//     //     </li>
//     // ));
//
//     return (
//         <section className="container">
//             <div {...getRootProps({className: 'dropzone'})}>
//                 <input {...getInputProps()} />
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//             </div>
//             <aside>
//                 <h4>Files</h4>
//                 {/*<ul>{files}</ul>*/}
//             </aside>
//         </section>
//     );
// }
