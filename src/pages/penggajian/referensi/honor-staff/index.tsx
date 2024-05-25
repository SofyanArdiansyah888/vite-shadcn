import {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";


import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import MataPelajaranEntity from "@/pages/akademik/referensi/mata-pelajaran/_data/mata-pelajaran.entity.ts";
import useMataPelajaranStore from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import PenggajianLayout from "@/components/layout/penggajian-layout.tsx";

import {createFileRoute} from "@tanstack/react-router";
import HonorGuruFilter from "@/pages/penggajian/referensi/honor-guru/_components/honor-guru-filter.tsx";
import HonorStaffTable from "@/pages/penggajian/referensi/honor-staff/_components/honor-staff-table.tsx";
import HonorStaffModal from "@/pages/penggajian/referensi/honor-staff/_components/honor-staff-modal.tsx";

export const Route = createFileRoute('/penggajian/referensi/honor-staff/')({
    component: () => <Index />
})

export default function Index() {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useMataPelajaranStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<MataPelajaranEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<PenggajianLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Honor Staff"}
                    additionalAction={<HonorGuruFilter/>}
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
                <HonorStaffTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <HonorStaffModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Honor"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </PenggajianLayout>

    );
}


