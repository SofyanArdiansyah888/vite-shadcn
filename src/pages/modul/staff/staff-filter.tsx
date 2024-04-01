import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {FilterButton} from "@/components/ui/button.tsx";
import FormSelect from "@/components/ui/form-select.tsx";



export default function StaffFilter() {
    return <AlertDialog>
        <AlertDialogTrigger asChild>
            <FilterButton/>
        </AlertDialogTrigger>
        <AlertDialogContent className={"w-[400px]"}>
            <AlertDialogHeader>
                <AlertDialogTitle>Filter Staff</AlertDialogTitle>
            </AlertDialogHeader>

            <FormSelect
                label={"Jenis Kelamin"}
                options={[{
                    value:"",
                    label:"Laki-laki"
                }]}
               defaultValue={""}
            />

            <FormSelect
                label={"Jenis Kelamin"}
                options={[{
                    value:"",
                    label:"Laki-laki"
                }]}
                defaultValue={""}
            />

            <FormSelect
                label={"Jenis Kelamin"}
                options={[{
                    value:"",
                    label:"Laki-laki"
                }]}
                defaultValue={""}
            />


            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                    <FilterButton/>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}
