import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";

export default function TempatTinggalTab() {
    return <TabsContent value={"tempat_tinggal"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Tempat Tinggal</h3>
                <Separator/>
                <FormInput
                    name={"provinsi"}
                    label={"Provinsi"}
                />
                <FormInput
                    name={"kota"}
                    label={"Kota / Kabupaten"}
                />
                <FormInput
                    name={"kecamatan"}
                    label={"Kecamatan"}
                />
                <FormInput
                    name={"kelurahan"}
                    label={"Kelurahan"}
                />
                <FormTextarea
                    name={"alamat"}
                    label={"Alamat"}
                />
            </div>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>&nbsp; </h3>
                <Separator/>
                <FormInput
                    name={"jenis_tinggal"}
                    label={"Jenis Tinggal"}
                />
                <FormInput
                    name={"jarak"}
                    label={"Jarak"}
                />
            </div>
        </div>
    </TabsContent>
}
