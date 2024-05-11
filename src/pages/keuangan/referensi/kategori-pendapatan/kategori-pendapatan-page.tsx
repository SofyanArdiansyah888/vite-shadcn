import {useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import KategoriPendapatanTable
    from "@/pages/keuangan/referensi/kategori-pendapatan/components/kategori-pendapatan-table.tsx";
import KategoriPendapatanModal
    from "@/pages/keuangan/referensi/kategori-pendapatan/components/kategori-pendapatan-modal.tsx";
import KategoriPendapatanEntity
    from "@/pages/keuangan/referensi/kategori-pendapatan/data/kategori-pendapatan.entity.ts";


export default function KategoriPendapatanPage() {
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<KategoriPendapatanEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Kategori Pendapatan"}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <KategoriPendapatanTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <KategoriPendapatanModal
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
