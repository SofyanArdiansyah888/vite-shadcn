import React, {useEffect, useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import JadwalPengajarTable from "@/pages/akademik/jadwal-pengajar/_components/jadwal-pengajar-table.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import JadwalPengajarFilter from "@/pages/akademik/jadwal-pengajar/_components/jadwal-pengajar-filter.tsx";
import useJadwalPengajarStore from "@/pages/akademik/jadwal-pengajar/_data/useJadwalPengajarStore.ts";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/akademik/jadwal-pengajar/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useJadwalPengajarStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Jadwal Pengajar"}
                    additionalAction={<JadwalPengajarFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <GroupBadgeFilter
                        filterPayload={filterPayload}
                        deleteFilterPayload={deleteFilterPayload}
                        resetFilterPayload={resetFilterPayload}
                    />
                </div>
                <JadwalPengajarTable
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>

            <DetailModal
                title={"Detail Jadwal Pengajar"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AkademikLayout>

    );
};

export default Index;
