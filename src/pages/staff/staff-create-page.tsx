import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffForm from "@/pages/staff/components/staff-form.tsx";

export default function StaffCreatePage() {
    return <StaffLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <StaffForm
                title={"Tambah Guru / Pegawai"}
            />
        </section>
    </StaffLayout>
}
