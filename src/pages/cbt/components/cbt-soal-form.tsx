import {Form} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";
import JenisKelaminSelect from "@/components/shared/form/select/jenis-kelamin-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import moment from "moment/moment";

interface IStaffForm {
    title: string
    staff?: StaffEntity
}


export default function CbtSoalForm({title, staff}: IStaffForm) {
    const [form] = Form.useForm();
    useEffect(() => {
        if (staff) {
            form.setFieldsValue({
                ...staff,
                tanggal_lahir: moment(staff.tanggal_lahir)
            })
        }
        form.setFieldsValue({
            details: [1, 2, 3,]
        })
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
        <div className={"grid grid-cols-3 gap-x-12 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Ubah Data Ujian</h3>
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
                <JenisKelaminSelect/>
                <FormInput
                    name={"tempat_lahir"}
                    label={"Tempat Lahir"}
                    rules={[{required: true}]}
                />
                <FormDate name={"tanggal_lahir"} label={"Tanggal Lahir"}/>

            </div>


            <div className={"space-y-3 col-span-2"}>
                <h3 className={"font-medium text-lg"}>Kunci Jawaban Soal Pilihan Ganda</h3>
                <Separator/>


                {/*    <ShadTable>*/}
                {/*    <TableHeader className={"bg-gray-100"}>*/}
                {/*        <TableRow className={"text-center"}>*/}
                {/*            <TableHead>Soal</TableHead>*/}
                {/*            <TableHead>A</TableHead>*/}
                {/*            <TableHead>B</TableHead>*/}
                {/*            <TableHead>C</TableHead>*/}
                {/*            <TableHead>D</TableHead>*/}
                {/*            <TableHead>E</TableHead>*/}
                {/*            <TableHead>Skor</TableHead>*/}
                {/*        </TableRow>*/}
                {/*    </TableHeader>*/}
                {/*    <TableBody>*/}
                {/*        <TableRow key={index}>*/}
                {/*            <TableCell className="font-medium">{index + 1}</TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <Radio value={"a"}/>*/}
                {/*            </TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <Radio value={"b"}/>*/}
                {/*            </TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <Radio value={"c"}/>*/}
                {/*            </TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <Radio value={"d"}/>*/}
                {/*            </TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <Radio value={"e"}/>*/}
                {/*            </TableCell>*/}
                {/*            <TableCell className="font-medium">*/}
                {/*                <InputNumber/>*/}
                {/*            </TableCell>*/}
                {/*        </TableRow>*/}
                {/*    </TableBody>*/}
                {/*</ShadTable>*/}

            </div>
        </div>
    </Form>
}
