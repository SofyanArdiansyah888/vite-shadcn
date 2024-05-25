import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import PenggajianLayout from "@/components/layout/penggajian-layout.tsx";
import ProfilGajiGuruTable from "@/pages/penggajian/profil-gaji-guru/_components/profil-gaji-guru-table.tsx";
import ProfilGajiGuruModal from "@/pages/penggajian/profil-gaji-guru/_components/profil-gaji-guru-modal.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/penggajian/profil-gaji-guru/')({
    component: () => <Index />
})

export default function Index() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<StaffEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    return (<PenggajianLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Gaji Guru"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <ProfilGajiGuruTable
                    handleGroupModal={handleGroupModal}
                    setDetail={setDetail}
                    setSelectedData={setSelectedData}
                />
            </section>
            <ProfilGajiGuruModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Potongan"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </PenggajianLayout>

    );
}


