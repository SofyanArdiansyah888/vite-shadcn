import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";

import AgendaEntity from "@/pages/agenda/_data/agenda.entity.ts";
import AgendaTable from "@/pages/agenda/_components/agenda-table.tsx";
import AgendaModal from "@/pages/agenda/_components/agenda-modal.tsx";
import AgendaLayout from "@/components/layout/agenda-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/agenda/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<AgendaEntity>()
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])

    return (<AgendaLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Agenda"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <AgendaTable
                    setSelectedData={setSelectedData}
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
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
        </AgendaLayout>

    );
};

export default Index;
