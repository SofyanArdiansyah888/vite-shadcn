import React, {useEffect} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import useParams from "@/hooks/useParams.tsx";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import KeuanganLayout from "@/components/layout/keuangan-layout.tsx";
import RekapitulasiPrint from "@/pages/keuangan/rekapitulasi/_components/rekapitulasi-print.tsx";
import RekapitulasiTable from "@/pages/keuangan/rekapitulasi/_components/rekapitulasi-table.tsx";
import RekapitulasiFilter from "@/pages/keuangan/rekapitulasi/_components/rekapitulasi-filter.tsx";
import useRekapitulasiStore from "@/pages/keuangan/rekapitulasi/_data/useRekapitulasiStore.ts";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/keuangan/rekapitulasi/')({
    component: () => <Index />
})

const Index: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useRekapitulasiStore()
    const {params, handleParamsChange} = useParams({})
    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [resetFilterPayload])
    return (<KeuanganLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Data Rekapitulasi"}
                    additionalAction={<div className={"flex gap-1"}>
                        <RekapitulasiFilter/>
                        <RekapitulasiPrint/>
                    </div>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />

                <div className={"flex justify-start  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <GroupBadgeFilter filterPayload={filterPayload}
                                          deleteFilterPayload={deleteFilterPayload}
                                          resetFilterPayload={resetFilterPayload}
                        />
                    </div>
                </div>
                <RekapitulasiTable params={params} />
            </section>
        </KeuanganLayout>

    );
};

export default Index;
