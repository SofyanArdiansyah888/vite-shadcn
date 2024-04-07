import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import TahunAjaranTable from "@/pages/modul/akademik/referensi/tahun-ajaran/components/tahun-ajaran-table.tsx";
import TahunAjaranModal from "@/pages/modul/akademik/referensi/tahun-ajaran/components/tahun-ajaran-modal.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import TahunAjaranEntity from "@/pages/modul/akademik/referensi/tahun-ajaran/data/tahun-ajaran.entity.ts";
import KelasTable from "@/pages/modul/akademik/referensi/kelas/components/kelas-table.tsx";
import KelasEntity from "@/pages/modul/akademik/referensi/kelas/data/kelas.entity.ts";
import KelasModal from "@/pages/modul/akademik/referensi/kelas/components/kelas-modal.tsx";


const KelasPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params,handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<KelasEntity>()

    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Kelas"}
                    handleSearch={(value) => handleParamsChange("search",value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <KelasTable
                    setSelectedData={setSelectedData}
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
        </AkademikLayout>

    );
};

export default KelasPage;
