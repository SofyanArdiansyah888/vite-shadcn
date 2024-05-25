import {Form} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import JenisKelaminSelect from "@/components/shared/form/select/jenis-kelamin-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import moment from "moment/moment";
import FormUpload from "@/components/shared/form/form-upload.tsx";
interface IStaffForm {
    title: string
    staff?: StaffEntity
}
export default function StaffForm({title,staff}:IStaffForm) {
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
                <h3 className={"font-medium text-lg"}>Data Pribadi</h3>
                <Separator/>
                <FormInput
                    name={"sekolah"}
                    label={"Sekolah"}
                />
                <FormInput
                    name={"nama"}
                    label={"Nama Lengkap"}
                    rules={[{required: true}]}
                />
                <FormInput
                    name={"nik"}
                    label={"Nik"}
                    rules={[{required: true}]}
                />
                <JenisKelaminSelect />
                <FormInput
                    name={"tempat_lahir"}
                    label={"Tempat Lahir"}
                    rules={[{required: true}]}
                />
                <FormDate name={"tanggal_lahir"} label={"Tanggal Lahir"} />

            </div>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Kepegawaian</h3>
                <Separator/>
                <FormInput
                    name={"jabatan"}
                    label={"Jabatan"}
                />
                <FormInput
                    name={"nuptk"}
                    label={"NUPTK"}
                />
                <FormInput
                    name={"nip"}
                    label={"NIP"}
                />

                <FormInput
                    name={"status_kepegawaian"}
                    label={"Status Kepegawaian"}
                />

                <FormInput
                    name={"jenis_ptk"}
                    label={"Jenis PTK"}
                />

            </div>

            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Info Lainnya</h3>
                <Separator/>
                <FormInput
                    name={"telepon"}
                    label={"Nomor Telepon/Whatsapp"}
                />
                <FormInput
                    name={"email"}
                    label={"Email"}
                />
                <FormInput
                    name={"rfid"}
                    label={"RFID"}
                />
                <FormUpload />
            </div>


        </div>
    </Form>
}
