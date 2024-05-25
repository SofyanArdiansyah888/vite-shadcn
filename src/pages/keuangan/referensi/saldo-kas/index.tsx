import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import SaldoKasTable from "@/pages/keuangan/referensi/saldo-kas/_components/saldo-kas-table.tsx";
import SaldoKasModal from "@/pages/keuangan/referensi/saldo-kas/_components/saldo-kas-modal.tsx";
import SaldoKasEntity from "@/pages/keuangan/referensi/saldo-kas/_data/saldo-kas.entity.ts";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/keuangan/referensi/saldo-kas/')({
    component: () => <Index />
})

export default function Index() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<SaldoKasEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Saldo Kas"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <SaldoKasTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <SaldoKasModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </KeuanganLayout>
    );
}
