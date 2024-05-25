import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import {createFileRoute, Link} from "@tanstack/react-router";
import StaffFilter from "@/pages/staff/_components/staff-filter.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useStaffStore from "@/pages/staff/_data/useStaffStore.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import DetailModal, {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import SiswaLayout from "@/components/layout/siswa-layout.tsx";
import SiswaTable from "@/pages/siswa/_components/siswa-table.tsx";

export const Route = createFileRoute('/siswa/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useStaffStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        detailModal: false,
    })
    const [detail, setDetail] = useState<IDetailInfoModal[]>([])

    function handleSearchChange() {

    }

    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<SiswaLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Siswa"}
                    additionalAction={<StaffFilter/>}
                    handleSearch={handleSearchChange}
                />
                <div className={"flex justify-between  py-2 gap-1"}>

                    <GroupBadgeFilter
                        filterPayload={filterPayload}
                        deleteFilterPayload={deleteFilterPayload}
                        resetFilterPayload={resetFilterPayload}
                    />

                    <Link to={"/siswa/create"}>
                        <AddButton/>
                    </Link>
                </div>

                <SiswaTable
                    setDetail={setDetail}
                    handleGroupModal={handleGroupModal}
                />
            </section>
            <DetailModal
                title={"Detail Staff"}
                isOpen={groupModal.detailModal}
                setIsOpen={(value) => handleGroupModal("detailModal", value as boolean)}
                details={detail}
                column={"grid-cols-3"}
                width={1000}
            />
        </SiswaLayout>

    );
};

export default Index;
