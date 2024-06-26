import React, {useEffect, useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import KelasModal from "@/pages/akademik/referensi/kelas/_components/kelas-modal.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import KelasFilter from "@/pages/akademik/referensi/kelas/_components/kelas-filter.tsx";
import useJadwalPelajaranStore from "@/pages/akademik/jadwal-pelajaran/_data/useJadwalPelajaranStore.ts";
import JadwalPelajaranEntity from "@/pages/akademik/jadwal-pelajaran/_data/jadwal-pelajaran.entity.ts";
import KelasJadwalPelajaranTable
    from "@/pages/akademik/jadwal-pelajaran/_components/kelas-jadwal-pelajaran-table.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/akademik/jadwal-pelajaran/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useJadwalPelajaranStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<JadwalPelajaranEntity>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Jadwal Pelajaran"}
                    additionalAction={<KelasFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <GroupBadgeFilter
                        filterPayload={filterPayload}
                        deleteFilterPayload={deleteFilterPayload}
                        resetFilterPayload={resetFilterPayload}
                    />
                </div>
                <KelasJadwalPelajaranTable
                    setSelectedData={setSelectedData}
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <KelasModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Kelas"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AkademikLayout>

    );
};

export default Index;
