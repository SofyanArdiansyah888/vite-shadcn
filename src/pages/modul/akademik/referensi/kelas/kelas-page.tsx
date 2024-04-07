import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import KelasTable from "@/pages/modul/akademik/referensi/kelas/components/kelas-table.tsx";
import KelasEntity from "@/pages/modul/akademik/referensi/kelas/data/kelas.entity.ts";
import KelasModal from "@/pages/modul/akademik/referensi/kelas/components/kelas-modal.tsx";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import useKelasStore from "@/pages/modul/akademik/referensi/kelas/data/useKelasStore.ts";
import {BadgeDeleteFilter, BadgeFilter} from "@/components/ui/custom-badge.tsx";
import KelasFilter from "@/pages/modul/akademik/referensi/kelas/components/kelas-filter.tsx";


const KelasPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload}  = useKelasStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false,
        detailModal: false,
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<KelasEntity>()
    const [detail, setDetail] = useState<{key: string,value: string}[]>([])

    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Kelas"}
                    additionalAction={<KelasFilter />}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <div className={"flex flex-row flex-wrap  gap-1 py-1  "}>
                            {
                                Object.entries(filterPayload).map((item, key) =>
                                        item[1] && <BadgeFilter
                                            key={key}
                                            title={item[1]?.label}
                                            onClick={() => deleteFilterPayload(item[0])}
                                        />
                                )
                            }
                            {
                                Object.entries(filterPayload)
                                    .filter(item => item[1] !== undefined)
                                    .length > 0 &&
                                <BadgeDeleteFilter onClick={resetFilterPayload}/>
                            }
                        </div>
                    </div>
                    <AddButton onClick={() => handleGroupModal('modal', true)}/>
                </div>
                <KelasTable
                    setSelectedData={setSelectedData}
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
            </section>
            <KelasModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Kelas"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AkademikLayout>

    );
};

export default KelasPage;
