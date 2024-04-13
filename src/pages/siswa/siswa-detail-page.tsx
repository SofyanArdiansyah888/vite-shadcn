import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffForm from "@/pages/staff/components/staff-form.tsx";
import {useParams} from "@tanstack/react-router";
import {useGetDetail} from "@/hooks/useApi.tsx";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";

export default function SiswaDetailPage() {
    const {id} = useParams({from: "/staff/$id"})
    const {data} = useGetDetail<StaffEntity>({
        name: 'staff',
        endpoint: `/staff`,
        id
    })
    console.log(id,'id edit')
    console.log(data,'data edit')
    return <StaffLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <StaffForm
                title={"Edit Guru / Pegawai"}
                staff={data}
            />
        </section>
    </StaffLayout>
}
