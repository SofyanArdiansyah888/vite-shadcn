import React, {useEffect, useState} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import PenggunaLayout from "@/components/layout/pengguna-layout.tsx";
import PenggunaTable from "@/pages/pengguna/(pengguna)/components/pengguna-table.tsx";
import PenggunaFilter from "@/pages/pengguna/(pengguna)/components/pengguna-filter.tsx";
import PenggunaModal from "@/pages/pengguna/(pengguna)/components/pengguna-modal.tsx";
import ResetPasswordModal from "@/pages/pengguna/(pengguna)/components/reset-password-modal.tsx";
import UserEntity from "@/pages/pengguna/(pengguna)/data/user.entity.ts";
import usePenggunaStore from "@/pages/pengguna/(pengguna)/data/usePenggunaStore.ts";


const PenggunaPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = usePenggunaStore()
    const {groupModal, handleGroupModal} = useGroupModal({
        resetPasswordModal: false,
        modal: false
    })
    const {params, handleParamsChange} = useParams({})
    const [selectedData, setSelectedData] = useState<UserEntity | undefined>()
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<PenggunaLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Pengguna"}
                    additionalAction={<PenggunaFilter/>}
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
                <PenggunaTable
                    setSelectedData={setSelectedData}
                    handleGroupModal={handleGroupModal}
                    params={params}
                />
                <PenggunaModal selectedData={selectedData}
                               setSelectedData={setSelectedData}
                               isOpen={groupModal.modal}
                               handleGroupModal={handleGroupModal}
                />
                <ResetPasswordModal
                               selectedData={selectedData}
                               setSelectedData={setSelectedData}
                               groupModal={groupModal}
                               handleGroupModal={handleGroupModal}
                />
            </section>


        </PenggunaLayout>

    );
};

export default PenggunaPage;
