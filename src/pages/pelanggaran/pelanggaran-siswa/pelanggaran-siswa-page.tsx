import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import PelanggaranLayout from "@/components/layout/pelanggaran-layout.tsx";
import PelanggaranSiswaEntity from "@/pages/pelanggaran/pelanggaran-siswa/data/pelanggaran-siswa.entity.ts";
import PelanggaranSiswaModal from "@/pages/pelanggaran/pelanggaran-siswa/components/pelanggaran-siswa-modal.tsx";
import PelanggaranSiswaTable from "@/pages/pelanggaran/pelanggaran-siswa/components/pelanggaran-siswa-table.tsx";


const PelanggaranSiswaPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<PelanggaranSiswaEntity>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])


    return (<PelanggaranLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Pelanggaran Siswa"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>

                    </div>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <PelanggaranSiswaTable
                    setSelectedData={setSelectedData}
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <PelanggaranSiswaModal
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

export default PelanggaranSiswaPage;
