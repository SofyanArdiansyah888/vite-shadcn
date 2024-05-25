import React, {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import LiburTable from "@/pages/absensi/libur/_components/libur-table.tsx";
import LiburModal from "@/pages/absensi/libur/_components/libur-modal.tsx";
import LiburEntity from "@/pages/absensi/libur/_data/libur.entity.ts";
import {createFileRoute} from "@tanstack/react-router";



export const Route = createFileRoute('/absensi/libur/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<LiburEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Hari Libur"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <LiburTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <LiburModal
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

export default Index;
