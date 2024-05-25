import SekolahForm from "@/pages/sekolah/_components/sekolah-form.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/sekolah/')({
    component: () => <Index />
})

export default function Index() {
    return <MainLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <SekolahForm
                title={"Data Sekolah"}
            />
        </section>
    </MainLayout>
}
