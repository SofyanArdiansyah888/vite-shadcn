import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffForm from "@/pages/staff/_components/staff-form.tsx";
import {createFileRoute, useParams} from "@tanstack/react-router";
import {useGetDetail} from "@/hooks/useApi.tsx";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import React from "react";
import Index from "@/pages/penggajian/(penggajian)";

export const Route = createFileRoute('/staff/staff-edit')({
    component: () => <Index />
})

export default function StaffEdit() {
    const {id} = useParams({from: "/staff/$id"})
    const {data} = useGetDetail<StaffEntity>({
        name: 'staff',
        endpoint: `/staff`,
        id
    })
    return <StaffLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <StaffForm
                title={"Edit Guru / Pegawai"}
                staff={data}
            />
        </section>
    </StaffLayout>
}
