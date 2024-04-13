import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";

export default function PendidikanTab() {
    return <TabsContent value={"pendidikan"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            {/*PENDIDIKAN SEBELUMNYA*/}
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Pendidikan Sebelumnya</h3>
                <Separator/>
                <FormInput
                    name={"sekolah_sebelumnya"}
                    label={"Nama Sekolah Sebelumnya"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"nisn"}
                    label={"NISN"}
                    // rules={[{required: true}]}
                />

            </div>

            {/*PENDIDIKAN SEKARANG*/}
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Pendidikan Sekarang</h3>
                <Separator/>
                <FormInput
                    name={"nama_sekolah"}
                    label={"Nama Sekolah"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"tahun_masuk"}
                    label={"Tahun Masuk"}
                    type={"number"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"nik_ibu"}
                    label={"NISN"}
                    // rules={[{required: true}]}
                />

            </div>

        </div>
    </TabsContent>
}
