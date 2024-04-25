import React, {useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import LiburEntity from "@/pages/absensi/libur/data/libur.entity.ts";
import JadwalTable from "@/pages/absensi/jadwal/component/jadwal-table.tsx";
import JadwalModal from "@/pages/absensi/jadwal/component/jadwal-modal.tsx";

const LiburPage: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<LiburEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Jadwal"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />

                <JadwalTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    // setDetail={setDetail}
                />
            </section>
            <JadwalModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Libur"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AbsensiLayout>

    );
};

export default LiburPage;
