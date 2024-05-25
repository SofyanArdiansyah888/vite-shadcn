import {Form} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import JenisKelaminSelect from "@/components/shared/form/select/jenis-kelamin-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import moment from "moment/moment";

import {Table as ShadTable, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import FormRadio from "@/components/shared/form/form-radio.tsx";

interface IStaffForm {
    title: string
    staff?: StaffEntity
}


export default function CbtSoalForm({title, staff}: IStaffForm) {
    const [form] = Form.useForm();

    function handleSubmit(payload: any){
        const tanggalLahir = payload['tanggal_lahir'].format('YYYY-MM-DD')
        console.log({
            ...payload,
            tanggal_lahir: tanggalLahir
        })
    }

    useEffect(() => {
        if (staff) {
            form.setFieldsValue({
                ...staff,
                tanggal_lahir: moment(staff.tanggal_lahir)
            })
        }
        form.setFieldsValue({
            details: [{
                a:true,
                b:false,
                c:false,
                d:false,
                e:false,
                skor:5,
            }]
        })
    }, [form, staff]);


    return <Form
        form={form}
        layout={"vertical"}
        className={""}
        onFinish={handleSubmit}
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

                <ShadTable>
                    <TableHeader className={"bg-gray-100"}>
                        <TableRow className={"text-center"}>
                            <TableHead className={"text-center"}>Soal</TableHead>
                            <TableHead className={"text-center"}>A</TableHead>
                            <TableHead className={"text-center"}>B</TableHead>
                            <TableHead className={"text-center"}>C</TableHead>
                            <TableHead className={"text-center"}>D</TableHead>
                            <TableHead className={"text-center"}>E</TableHead>
                            <TableHead className={"text-center"}>Skor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <Form.List name={"details"}>
                            {fields => (
                                <>
                                    {
                                        fields.map((field, index) =>
                                        {
                                            console.log(field,'fieldku')
                                           return <TableRow key={index} className={"text-center"}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell className="font-medium">
                                                    <FormRadio name={[field.name,"a"]} radios={[true]}/>
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <FormRadio name={[field.name,"b"]} radios={[true]}/>
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <FormRadio name={[field.name,"c"]} radios={[true]}/>
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <FormRadio name={[field.name,"d"]} radios={[true]}/>
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <FormRadio name={[field.name,"e"]} radios={[true]}/>
                                                </TableCell>
                                                <TableCell className="font-medium w-[100px]">
                                                    <FormInput
                                                        name={[field.name,'skor']}
                                                        label={""}
                                                        type={"number"}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        })
                                    }
                                </>
                            )
                            }

                        </Form.List>

                    </TableBody>
                </ShadTable>

            </div>
        </div>
    </Form>
}
