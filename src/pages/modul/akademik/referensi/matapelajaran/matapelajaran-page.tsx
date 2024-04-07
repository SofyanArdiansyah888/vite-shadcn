import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";

import MatapelajaranModal from "@/pages/modul/akademik/referensi/matapelajaran/components/matapelajaran-modal.tsx";
import MatapelajaranTable from "@/pages/modul/akademik/referensi/matapelajaran/components/matapelajaran-table.tsx";
import MatapelajaranFilter from "@/pages/modul/akademik/referensi/matapelajaran/components/matapelajaran-filter.tsx";
import MatapelajaranEntity from "@/pages/modul/akademik/referensi/matapelajaran/data/matapelajaran.entity.ts";
import useMatapelajaranStore from "@/pages/modul/akademik/referensi/matapelajaran/data/useMatapelajaranStore.ts";
import DetailModal from "@/components/shared/modal/detail-modal.tsx";
import {BadgeDeleteFilter, BadgeFilter} from "@/components/ui/custom-badge.tsx";


const MatapelajaranPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useMatapelajaranStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<MatapelajaranEntity | undefined>()
    const [detail, setDetail] = useState<{ key: string, value: string }[]>([])
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Mata Pelajaran"}
                    additionalAction={<MatapelajaranFilter/>}
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
                <MatapelajaranTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                    setDetail={setDetail}
                />
            </section>
            <MatapelajaranModal
                isOpen={groupModal.modal}
                handleGroupModal={handleGroupModal}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <DetailModal
                title={"Detail Matapelajaran"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
            />
        </AkademikLayout>

    );
};

export default MatapelajaranPage;
