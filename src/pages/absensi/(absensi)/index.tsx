import React, {useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";

import AgendaEntity from "@/pages/agenda/_data/agenda.entity.ts";
import AgendaModal from "@/pages/agenda/_components/agenda-modal.tsx";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";

import {PersonIcon} from "@radix-ui/react-icons";
import {Tabs, TabsButton, TabsContent, TabsList} from "@/components/ui/tabs.tsx";

import {createFileRoute} from "@tanstack/react-router";
import useAbsensiStore from "@/pages/absensi/(absensi)/_data/useAbsensiStore.tsx";
import AbsensiFilter from "@/pages/absensi/(absensi)/_components/absensi-filter.tsx";
import AbsensiSiswaTable from "@/pages/absensi/(absensi)/_components/absensi-siswa-table.tsx";
import AbsensiStaffTable from "@/pages/absensi/(absensi)/_components/absensi-staff-table.tsx";

export const Route = createFileRoute('/absensi/(absensi)/')({
    component: () => <AbsensiPage/>
})


const AbsensiPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useAbsensiStore()
    const {params, handleParamsChange} = useParams({})

    const [selectedData, setSelectedData] = useState<AgendaEntity>()
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])

    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Absensi"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                    additionalAction={<AbsensiFilter selectedTab={"guru"}/>}
                />


                <Tabs defaultValue={"siswa"}>

                    <TabsList className={"space-x-2 min-w-full justify-start"}>
                        <TabsButton value={"siswa"}
                                    icon={<PersonIcon strokeWidth={1} className={"w-4 h-4"}/>}
                                    title={"Siswa"}
                        />
                        <TabsButton value={"guru"}
                                    icon={<PersonIcon strokeWidth={1} className={"w-4 h-4"}/>}
                                    title={"Guru/Staff"}
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
                        <AbsensiSiswaTable
                            setDetail={setDetail}
                            handleGroupModal={handleGroupModal}
                            params={params}
                        />
                    </TabsContent>
                    <TabsContent value={"guru"}>
                        <AbsensiStaffTable
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
                title={"Detail Agenda"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AbsensiLayout>

    );
};

export default AbsensiPage;
