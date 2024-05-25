import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffForm from "@/pages/staff/_components/staff-form.tsx";
import {createFileRoute} from "@tanstack/react-router";
import Index from "@/pages/penggajian/(penggajian)";

export const Route = createFileRoute('/staff/staff-create')({
    component: () => <Index />
})

export default function StaffCreate() {
    return <StaffLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <StaffForm
                title={"Tambah Guru / Pegawai"}
            />
        </section>
    </StaffLayout>
}
