import React, {useEffect, useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import MataPelajaranEntity from "@/pages/akademik/referensi/mata-pelajaran/data/mata-pelajaran.entity.ts";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import DataSppFilter from "@/pages/keuangan/spp/data-spp/components/data-spp-filter.tsx";
import DataSppTable from "@/pages/keuangan/spp/data-spp/components/data-spp-table.tsx";
import DataSppModal from "@/pages/keuangan/spp/data-spp/components/data-spp-modal.tsx";
import {formatRupiah} from "@/lib/formatter.ts";
import {Separator} from "@/components/ui/separator.tsx";
import useDataSPPStore from "@/pages/keuangan/spp/data-spp/data/useDataSPPStore.ts";


const DataSppPage: React.FC = () => {
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
                    title={"Data SPP"}
                    additionalAction={<DataSppFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                    <div className={" flex gap-2 items-end px-2 font-semibold text-xs space-y-1 my-1"}>
                        <div className={"flex gap-2 text-red-700 "}>
                            <div>Belum Bayar :</div>
                            <div> {formatRupiah(20000, true)} (15 Orang)</div>
                        </div>
                        <Separator orientation={"vertical"} className={"h-4 w-0.5"}/>
                        <div className={"flex gap-2 text-green-700"}>
                            <div>Sudah Bayar :</div>
                            <div> {formatRupiah(20000, true)} (10 Orang)</div>
                        </div>
                    </div>
                </div>

                <DataSppTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <DataSppModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Data SPP"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </KeuanganLayout>

    );
};

export default DataSppPage;
