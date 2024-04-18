import { createFileRoute } from '@tanstack/react-router'
import CbtSoalFormPage from "@/pages/cbt/cbt-soal-form-page.tsx";

export const Route = createFileRoute('/cbt/create-soal')({
  component: () => <CbtSoalFormPage />
})
