import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import PenggajianLayout from "@/components/layout/penggajian-layout.tsx";

import {createFileRoute} from "@tanstack/react-router";
import PotonganEntity from "@/pages/penggajian/referensi/potongan/_data/potongan.entity.ts";
import PotonganTable from "@/pages/penggajian/referensi/potongan/_components/potongan-table.tsx";
import PotonganModal from "@/pages/penggajian/referensi/potongan/_components/potongan-modal.tsx";

export const Route = createFileRoute('/penggajian/referensi/potongan/')({
    component: () => <Index />
})

export default function Index() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<PotonganEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    return (<PenggajianLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Potongan"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <PotonganTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <PotonganModal
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


