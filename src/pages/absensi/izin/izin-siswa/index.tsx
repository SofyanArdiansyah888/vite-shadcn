import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import useMataPelajaranStore from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import IzinSiswaEntity from "@/pages/absensi/izin/izin-siswa/_data/izin-siswa.entity.ts";
import IzinSiswaFilter from "@/pages/absensi/izin/izin-siswa/_component/izin-siswa-filter.tsx";
import IzinSiswaTable from "@/pages/absensi/izin/izin-siswa/_component/izin-siswa-table.tsx";
import IzinSiswaModal from "@/pages/absensi/izin/izin-siswa/_component/izin-siswa-modal.tsx";
import {createFileRoute} from "@tanstack/react-router";


export const Route = createFileRoute('/absensi/izin/izin-siswa/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useMataPelajaranStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<IzinSiswaEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Izin Siswa"}
                    additionalAction={<IzinSiswaFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <IzinSiswaTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <IzinSiswaModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Izin"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AbsensiLayout>

    );
};

export default Index;
