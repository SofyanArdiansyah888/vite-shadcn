import CbtLayout from "@/components/layout/cbt-layout.tsx";
import CbtSoalForm from "@/pages/cbt/components/cbt-soal-form.tsx";



export default function CbtSoalFormPage() {
    return <CbtLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <CbtSoalForm
                title={"Edit Soal"}
            />
        </section>
    </CbtLayout>
}
