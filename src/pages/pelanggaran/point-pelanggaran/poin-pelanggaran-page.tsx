import React, {useState} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import PelanggaranLayout from "@/components/layout/pelanggaran-layout.tsx";
import PoinPelanggaranTable from "@/pages/pelanggaran/point-pelanggaran/components/poin-pelanggaran-table.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import PoinPelanggaranFilter from "@/pages/pelanggaran/point-pelanggaran/components/poin-pelanggaran-filter.tsx";
import usePoinPelanggaranStore from "@/pages/pelanggaran/point-pelanggaran/data/usePoinPelanggaranStore.ts";


const PoinPelanggaranPage: React.FC = () => {
    const {filterPayload, deleteFilterPayload, resetFilterPayload} = usePoinPelanggaranStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])


    return (<PelanggaranLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Point Pelanggaran"}
                    additionalAction={<PoinPelanggaranFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                </div>
                <PoinPelanggaranTable
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>

            <DetailModal
                title={"Detail Point Pelanggaran"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </PelanggaranLayout>

    );
};

export default PoinPelanggaranPage;
