import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import JenisPelanggaranEntity from "@/pages/pelanggaran/jenis-pelanggaran/_data/jenis-pelanggaran.entity.ts";
import JenisPelanggaranModal from "@/pages/pelanggaran/jenis-pelanggaran/_components/jenis-pelanggaran-modal.tsx";
import JenisPelanggaranTable from "@/pages/pelanggaran/jenis-pelanggaran/_components/jenis-pelanggaran-table.tsx";
import PelanggaranLayout from "@/components/layout/pelanggaran-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/pelanggaran/jenis-pelanggaran/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<JenisPelanggaranEntity>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])


    return (<PelanggaranLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Jenis Pelanggaran"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>

                    </div>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <JenisPelanggaranTable
                    setSelectedData={setSelectedData}
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <JenisPelanggaranModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Jenis Pelanggaran"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </PelanggaranLayout>

    );
};

export default Index;
