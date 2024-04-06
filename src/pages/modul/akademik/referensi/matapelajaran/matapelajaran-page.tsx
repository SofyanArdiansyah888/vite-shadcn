import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import TahunAjaranTable from "@/pages/modul/akademik/referensi/tahun-ajaran/components/tahun-ajaran-table.tsx";
import TahunAjaranModal from "@/pages/modul/akademik/referensi/tahun-ajaran/components/tahun-ajaran-modal.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import TahunAjaranEntity from "@/pages/modul/akademik/referensi/tahun-ajaran/data/tahun-ajaran.entity.ts";


const MatapelajaranPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params,handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<TahunAjaranEntity>()

    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Kelas"}
                    handleSearch={(value) => handleParamsChange("search",value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <TahunAjaranTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <TahunAjaranModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
        </AkademikLayout>

    );
};

export default MatapelajaranPage;
