import { createFileRoute } from '@tanstack/react-router'
import CbtCreateSoalPage from "@/pages/cbt/cbt-create-soal-page.tsx";

export const Route = createFileRoute('/cbt/create-soal')({
  component: () => <CbtCreateSoalPage />
})
