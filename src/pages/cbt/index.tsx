import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";
import CbtLayout from "@/components/layout/cbt-layout.tsx";
import CbtModal from "@/pages/cbt/_components/cbt-modal.tsx";
import CBTEntity from "@/pages/cbt/_data/cbt.entity.ts";
import CbtTable from "@/pages/cbt/_components/cbt-table.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/cbt/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<CBTEntity>()
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])
    return (<CbtLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Bank Soal"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <CbtTable
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setSelectedData={setSelectedData}
                />
            </section>
            <CbtModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Soal"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </CbtLayout>

    );
};

export default Index;
