import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function KeluargaTab() {
    return <TabsContent value={"keluarga"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            {/*AYAH*/}
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>AYAH</h3>
                <Separator/>
                <FormInput
                    name={"nama_ayah"}
                    label={"Nama"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"nik_ayah"}
                    label={"Nik"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"pekerjaan_ayah"}
                    label={"Pekerjaan"}
                />
                <FormInput
                    name={"pendidikan_ayah"}
                    label={"Pendidikan"}
                />
                <FormInput
                    name={"telepon_ayah"}
                    label={"Telepon"}
                />
            </div>

            {/*IBU*/}
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>IBU</h3>
                <Separator/>
                <FormInput
                    name={"nama_ibu"}
                    label={"Nama"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"nik_ibu"}
                    label={"Nik"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"pekerjaan_ibu"}
                    label={"Pekerjaan"}
                />
                <FormInput
                    name={"pendidikan_ibu"}
                    label={"Pendidikan"}
                />
                <FormInput
                    name={"telepon_ibu"}
                    label={"Telepon"}
                />
            </div>

            {/* WALI */}
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>WALI</h3>
                <Separator/>
                <div>
                    <label>Samakan Data</label>
                    <div className={"flex gap-2 mt-2"}>
                        <Button size={"sm"} variant={"outline"}>AYAH</Button>
                        <Button size={"sm"} variant={"outline"}>IBU</Button>
                    </div>
                </div>
                <FormInput
                    name={"nama_wali"}
                    label={"Nama"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"nik_wali"}
                    label={"Nik"}
                    // rules={[{required: true}]}
                />
                <FormInput
                    name={"pekerjaan_wali"}
                    label={"Pekerjaan"}
                />
                <FormInput
                    name={"pendidikan_wali"}
                    label={"Pendidikan"}
                />
                <FormInput
                    name={"telepon_wali"}
                    label={"Telepon"}
                />
            </div>
        </div>
    </TabsContent>
}
