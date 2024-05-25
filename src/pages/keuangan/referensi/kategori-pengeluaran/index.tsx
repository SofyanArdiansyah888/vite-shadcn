import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import KategoriPengeluaranTable
    from "@/pages/keuangan/referensi/kategori-pengeluaran/_components/kategori-pengeluaran-table.tsx";
import KategoriPengeluaranModal
    from "@/pages/keuangan/referensi/kategori-pengeluaran/_components/kategori-pengeluaran-modal.tsx";
import KategoriPengeluaranEntity
    from "@/pages/keuangan/referensi/kategori-pengeluaran/_data/kategori-pengeluaran.entity.ts";
import {createFileRoute} from "@tanstack/react-router";


export const Route = createFileRoute('/keuangan/referensi/kategori-pengeluaran/')({
    component: () => <Index />
})

export default function Index() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<KategoriPengeluaranEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])

    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Kategori Pengeluaran"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <KategoriPengeluaranTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <KategoriPengeluaranModal
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
