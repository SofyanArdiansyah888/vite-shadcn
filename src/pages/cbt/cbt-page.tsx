import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";
import InformasiEntity from "@/pages/informasi/data/informasi.entity.ts";
import InformasiModal from "@/pages/informasi/components/informasi-modal.tsx";
import InformasiTable from "@/pages/informasi/components/informasi-table.tsx";
import CbtLayout from "@/components/layout/cbt-layout.tsx";


const InformasiPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<InformasiEntity>()
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])

    return (<CbtLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Ujian"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <InformasiTable
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <InformasiModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Informasil"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </CbtLayout>

    );
};

export default InformasiPage;
