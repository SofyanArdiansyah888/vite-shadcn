import {TabsContent} from "@/components/ui/tabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import GolonganDarahSelect from "@/components/shared/form/select/golongan-darah-select.tsx";

export default function KesehatanTab() {
    return <TabsContent value={"kesehatan"}>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <h3 className={"font-medium text-lg"}>Kesehatan</h3>
                <Separator/>
                <GolonganDarahSelect/>

            </div>
        </div>
    </TabsContent>
}
