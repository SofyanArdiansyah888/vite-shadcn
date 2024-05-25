import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";

export default function RfidTab() {
    return <TabsContent value={"rfid"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>RFID</h3>
                <Separator/>
                <FormInput
                    name={"rfid"}
                    label={"Kode RFID"}
                    // rules={[{required: true}]}
                />

            </div>
        </div>
    </TabsContent>
}
