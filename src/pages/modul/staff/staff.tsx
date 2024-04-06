import React, {useEffect} from 'react';
import {AddButton} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";
import {BadgeDeleteFilter, BadgeFilter} from "@/components/ui/custom-badge.tsx";
import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffFilter from "@/pages/modul/staff/components/staff-filter.tsx";
import CustomHeader from "@/components/shared/custom-header.tsx";
import useStaffStore from "@/pages/modul/staff/components/useStaffStore.tsx";
import StaffTable from "@/pages/modul/staff/components/staff-table.tsx";


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
