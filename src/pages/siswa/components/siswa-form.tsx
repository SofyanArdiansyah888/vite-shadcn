import {Form} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import {BackButton, Button, SaveButton} from "@/components/ui/button.tsx";
import {ReactNode, useEffect} from "react";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";
import moment from "moment/moment";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import SiswaTab from "@/pages/siswa/components/siswa-tab.tsx";
import {PersonIcon} from "@radix-ui/react-icons";
import {GraduationCapIcon, MapPinIcon, QrCodeIcon, StethoscopeIcon, UsersIcon} from "lucide-react";
import TempatTinggalTab from "@/pages/siswa/components/tempat-tinggal-tab.tsx";
import KesehatanTab from "@/pages/siswa/components/kesehatan-tab.tsx";
import KeluargaTab from "@/pages/siswa/components/keluarga-tab.tsx";
import RfidTab from "@/pages/siswa/components/rfid-tab.tsx";
import PendidikanTab from "@/pages/siswa/components/pendidikan-tab.tsx";

interface ISiswaForm {
    title: string
    staff?: StaffEntity
}

export default function SiswaForm({title, staff}: ISiswaForm) {
    const [form] = Form.useForm();
    useEffect(() => {
        if (staff) {
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
        <Tabs defaultValue={"siswa"}>
            <TabsList className={"space-x-2 min-w-full justify-start"}>

                <TabsButton value={"siswa"}
                            icon={<PersonIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"Data Siswa"}
                />
                <TabsButton value={"tempat_tinggal"}
                            icon={<MapPinIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"Tempat Tinggal"}
                />
                <TabsButton value={"kesehatan"}
                            icon={<StethoscopeIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"Kesehatan"}
                />
                <TabsButton value={"keluarga"}
                            icon={<UsersIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"Keluarga"}
                />
                <TabsButton value={"pendidikan"}
                            icon={<GraduationCapIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"Pendidikan"}
                />

                {/*<TabsButton value={"pindahan_dari"}*/}
                {/*            icon={<GraduationCapIcon strokeWidth={1} className={"w-4 h-4"}/>}*/}
                {/*            title={"Pindahan Dari"}*/}
                {/*/>*/}
                {/*<TabsButton value={"diterima"}*/}
                {/*            icon={<GraduationCapIcon strokeWidth={1} className={"w-4 h-4"}/>}*/}
                {/*            title={"Diterima di sekolah ini"}*/}
                {/*/>*/}


                <TabsButton value={"rfid"}
                            icon={<QrCodeIcon strokeWidth={1} className={"w-4 h-4"}/>}
                            title={"RFID"}
                />


            </TabsList>
            <SiswaTab/>
            <TempatTinggalTab />
            <KesehatanTab />
            <KeluargaTab />
            <PendidikanTab />
            <RfidTab />
        </Tabs>
    </Form>
}

function TabsButton({
                        value,
                        title,
                        icon
                    }: { value: string, icon: ReactNode, title: string }) {
    return <TabsTrigger value={value} asChild>
        <Button size={"xs"} variant={"ghost"} className={"gap-2"}>
            {icon}
            {title}
        </Button>
    </TabsTrigger>
}
