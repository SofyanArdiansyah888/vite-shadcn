import SiswaLayout from "@/components/layout/siswa-layout.tsx";
import SiswaForm from "@/pages/siswa/components/siswa-form.tsx";


export default function SiswaCreatePage() {
    return <SiswaLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <SiswaForm
                title={"Tambah Siswa"}
            />


        </section>
    </SiswaLayout>
}
