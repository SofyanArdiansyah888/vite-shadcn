import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";


import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import MataPelajaranEntity from "@/pages/akademik/referensi/mata-pelajaran/data/mata-pelajaran.entity.ts";
import MataPelajaranFilter from "@/pages/akademik/referensi/mata-pelajaran/components/mata-pelajaran-filter.tsx";
import useMataPelajaranStore from "@/pages/akademik/referensi/mata-pelajaran/data/useMataPelajaranStore.ts";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import PembayaranNonSppTable from "@/pages/keuangan/pembayaran-non-spp/components/pembayaran-non-spp-table.tsx";
import PembayaranNonSppModal from "@/pages/keuangan/pembayaran-non-spp/components/pembayaran-non-spp-modal.tsx";


const PembayaranNonSppPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useMataPelajaranStore()
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
                    title={"Pembayaran Non SPP"}
                    additionalAction={<MataPelajaranFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <PembayaranNonSppTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <PembayaranNonSppModal
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
};

export default PembayaranNonSppPage;
