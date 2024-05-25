import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import TagihanSppModal from "@/pages/keuangan/spp/tagihan/_components/tagihan-spp-modal.tsx";
import TagihanSppTable from "@/pages/keuangan/spp/tagihan/_components/tagihan-spp-table.tsx";
import useTagihanSPPStore from "@/pages/keuangan/spp/tagihan/_data/useTagihanSPPStore.ts";
import TagihanSppEntity from "@/pages/keuangan/spp/tagihan/_data/tagihan-spp.entity.ts";
import TagihanSppFilter from "@/pages/keuangan/spp/tagihan/_components/tagihan-spp-filter.tsx";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/keuangan/spp/tagihan/')({
    component: () => <Index />
})


const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useTagihanSPPStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<TagihanSppEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [resetFilterPayload])
    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Tagihan SPP"}
                    additionalAction={<TagihanSppFilter/>}
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
                <TagihanSppTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <TagihanSppModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Tagihan"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </KeuanganLayout>

    );
};

export default Index;
