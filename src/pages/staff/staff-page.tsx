import React, {useEffect} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";
import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffFilter from "@/pages/staff/components/staff-filter.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useStaffStore from "@/pages/staff/data/useStaffStore.tsx";
import StaffTable from "@/pages/staff/components/staff-table.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";


const StaffPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useStaffStore()

    function handleSearchChange() {

    }

    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<StaffLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"List Staff"}
                    additionalAction={<StaffFilter/>}
                    handleSearch={handleSearchChange}
                />
                <div className={"flex justify-between  py-2 gap-1"}>

                    <GroupBadgeFilter
                        filterPayload={filterPayload}
                        deleteFilterPayload={deleteFilterPayload}
                        resetFilterPayload={resetFilterPayload}
                    />

                    <Link to={"/staff/create"}>
                        <AddButton/>
                    </Link>
                </div>
                <StaffTable/>
            </section>
        </StaffLayout>

    );
};

export default StaffPage;
