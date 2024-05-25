import {Form} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import moment from "moment/moment";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";

interface IStaffForm {
    title: string
    staff?: StaffEntity
}
export default function SekolahForm({title,staff}:IStaffForm) {
    const [form] = Form.useForm();
    console.log(staff,'staff form')
    useEffect(() => {
        if(staff){
            form.setFieldsValue({
                ...staff,
                tanggal_lahir: moment(staff.tanggal_lahir)
            })
        }
    }, [form, staff]);
    return <Form
        form={form}
        layout={"vertical"}
        className={""}
    >
        <div className="flex items-center justify-between ">
            <div className="space-y-1 my-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h2>
            </div>
            <div className={"flex justify-end gap-2"}>
                <BackButton/>
                <SaveButton/>
            </div>
        </div>
        <Separator className="my-2"/>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <FormInput
                    name={"sekolah"}
                    label={"Nama Sekolah"}
                    rules={[{required: true}]}
                />
                <FormInput
                    name={"telepon"}
                    label={"Telepon"}
                    rules={[{required: true}]}
                />
                <FormTextarea
                    name={"alamat"}
                    label={"Alamat Lengkap"}
                    rules={[{required: true}]}
                />


            </div>


        </div>
    </Form>
}
