import SekolahForm from "@/pages/sekolah/components/sekolah-form.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";

export default function SekolahPage() {
    return <MainLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <SekolahForm
                title={"Data Sekolah"}
            />
        </section>
    </MainLayout>
}
