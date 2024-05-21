import React, {useEffect, useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import MataPelajaranEntity from "@/pages/akademik/referensi/mata-pelajaran/data/mata-pelajaran.entity.ts";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import useDataSPPStore from "@/pages/keuangan/spp/data-spp/data/useDataSPPStore.ts";
import PengeluaranTable from "@/pages/keuangan/pengeluaran/components/pengeluaran-table.tsx";
import PengeluaranModal from "@/pages/keuangan/pengeluaran/components/pengeluaran-modal.tsx";
import RekapitulasiFilter from "@/pages/keuangan/rekapitulasi/components/rekapitulasi-filter.tsx";
import RekapitulasiTable from "@/pages/keuangan/rekapitulasi/components/rekapitulasi-table.tsx";


const RekapitulasiPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useDataSPPStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<MataPelajaranEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [resetFilterPayload])
    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Rekapitulasi"}
                    additionalAction={<RekapitulasiFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-end  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                </div>


                <RekapitulasiTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <PengeluaranModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Pengeluaran"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </KeuanganLayout>

    );
};

export default RekapitulasiPage;
