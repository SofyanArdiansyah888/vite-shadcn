import PenggunaLayout from "@/components/layout/pengguna-layout.tsx";
import ProfilForm from "@/pages/pengguna/profil/components/profil-form.tsx";

export default function ProfilPage() {
    return <PenggunaLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <ProfilForm
                title={"Data Profil"}
            />
        </section>
    </PenggunaLayout>
}
