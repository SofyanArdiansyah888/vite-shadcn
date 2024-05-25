import CbtLayout from "@/components/layout/cbt-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";
import Index from "@/pages/akademik/referensi/kelas";


export const Route = createFileRoute('/cbt/cbt-soal-form')({
    component: () => <Index />
})

export default function CbtSoalForm() {
    return <CbtLayout>
        <section className={"py-4 px-12 space-y-4"}>

        </section>
    </CbtLayout>
}
