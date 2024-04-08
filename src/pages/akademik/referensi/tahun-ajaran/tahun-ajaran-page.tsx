import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import TahunAjaranTable from "@/pages/akademik/referensi/tahun-ajaran/components/tahun-ajaran-table.tsx";
import TahunAjaranModal from "@/pages/akademik/referensi/tahun-ajaran/components/tahun-ajaran-modal.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import TahunAjaranEntity from "@/pages/akademik/referensi/tahun-ajaran/data/tahun-ajaran.entity.ts";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";


const TahunAjaranPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params,handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<TahunAjaranEntity>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Tahun Ajaran"}
                    handleSearch={(value) => handleParamsChange("search",value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <TahunAjaranTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <TahunAjaranModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Tahun Ajaran"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AkademikLayout>

    );
};

export default TahunAjaranPage;
