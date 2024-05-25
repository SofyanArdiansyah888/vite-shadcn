import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import JenisKelaminSelect from "@/components/shared/form/select/jenis-kelamin-select.tsx";
import FormUpload from "@/components/shared/form/form-upload.tsx";

export default function SiswaTab() {
    return <TabsContent value={"siswa"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Data Pribadi</h3>
                <Separator/>
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
                <FormInput
                    name={"telepon"}
                    label={"Nomor Telepon / WA"}
                />
                <JenisKelaminSelect/>

            </div>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>&nbsp; </h3>
                <Separator/>
                <FormUpload/>
            </div>
        </div>
    </TabsContent>
}
