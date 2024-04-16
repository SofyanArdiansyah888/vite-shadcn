import CbtLayout from "@/components/layout/cbt-layout.tsx";
import CbtSoalForm from "@/pages/cbt/components/cbt-soal-form.tsx";

// FORM BUAT PARENT SOAL -> CBT FORM
// FORM BUAT SOAL -> CBT SOAL FORM

export default function CbtCreateSoalPage() {
    return <CbtLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <CbtSoalForm
                title={"Tambah Guru / Pegawai"}
            />
        </section>
    </CbtLayout>
}
