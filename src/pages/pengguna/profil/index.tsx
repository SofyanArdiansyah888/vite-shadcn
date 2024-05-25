import PenggunaLayout from "@/components/layout/pengguna-layout.tsx";
import ProfilForm from "@/pages/pengguna/profil/_components/profil-form.tsx";
import {createFileRoute} from "@tanstack/react-router";


export const Route = createFileRoute('/pengguna/profil/')({
    component: () => <Index />
})

export default function Index() {
    return <PenggunaLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <ProfilForm
                title={"Data Profil"}
            />
        </section>
    </PenggunaLayout>
}
