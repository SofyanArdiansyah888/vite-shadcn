import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import PenggajianLayout from "@/components/layout/penggajian-layout.tsx";

import {createFileRoute} from "@tanstack/react-router";
import TunjanganEntity from "@/pages/penggajian/referensi/tunjangan/_data/tunjangan.entity.ts";
import TunjanganTable from "@/pages/penggajian/referensi/tunjangan/_components/tunjangan-table.tsx";
import TunjanganModal from "@/pages/penggajian/referensi/tunjangan/_components/tunjangan-modal.tsx";

export const Route = createFileRoute('/penggajian/referensi/tunjangan/')({
    component: () => <Index />
})

export default function Index() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<TunjanganEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    return (<PenggajianLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Tunjangan"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <TunjanganTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <TunjanganModal
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


