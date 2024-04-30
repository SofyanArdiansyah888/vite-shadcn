import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";

import AgendaEntity from "@/pages/agenda/data/agenda.entity.ts";
import AgendaModal from "@/pages/agenda/components/agenda-modal.tsx";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import useAbsensiStore from "@/pages/absensi/absensi/data/useAbsensiStore.tsx";
import {PersonIcon} from "@radix-ui/react-icons";
import {Tabs, TabsButton, TabsContent, TabsList} from "@/components/ui/tabs.tsx";
import {useState} from "react";
import RecapSiswaTable from "@/pages/absensi/recap/components/recap-siswa-table.tsx";
import RecapStaffTable from "@/pages/absensi/recap/components/recap-staff-table.tsx";
import RecapFilter from "@/pages/absensi/recap/components/recap-filter.tsx";


export default function RecapPage() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useAbsensiStore()
    const {params, handleParamsChange} = useParams({})

    const [selectedData, setSelectedData] = useState<AgendaEntity>()
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])
    const [selectedTab, setSelectedTab] = useState<"siswa" | "guru">("siswa")

    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Rekap Absensi"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                    additionalAction={<RecapFilter selectedTab={selectedTab}/>}
                />


                <Tabs defaultValue={selectedTab}>

                    <TabsList className={"space-x-2 min-w-full justify-start"}>
                        <TabsButton value={"siswa"}
                                    icon={<PersonIcon strokeWidth={1} className={"w-4 h-4"}/>}
                                    title={"Siswa"}
                                    handleClick={() => setSelectedTab("siswa")}
                        />
                        <TabsButton value={"guru"}
                                    icon={<PersonIcon strokeWidth={1} className={"w-4 h-4"}/>}
                                    title={"Guru/Staff"}
                                    handleClick={() => setSelectedTab("guru")}
                        />
                    </TabsList>
                    <div className={"flex justify-between  py-2 gap-1"}>
                        <GroupBadgeFilter
                            filterPayload={filterPayload}
                            deleteFilterPayload={deleteFilterPayload}
                            resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                    <TabsContent value={"siswa"}>
                        <RecapSiswaTable
                            params={params}
                        />
                    </TabsContent>
                    <TabsContent value={"guru"}>
                        <RecapStaffTable
                            setDetail={setDetail}
                            handleGroupModal={handleGroupModal}
                            params={params}
                        />
                    </TabsContent>
                </Tabs>

            </section>
            <AgendaModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Recap"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AbsensiLayout>

    );
}

