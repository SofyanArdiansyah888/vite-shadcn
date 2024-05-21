import { createFileRoute } from '@tanstack/react-router'
import RekapitulasiPage from "@/pages/keuangan/rekapitulasi/rekapitulasi-page.tsx";

export const Route = createFileRoute('/keuangan/rekapitulasi')({
  component: () => <RekapitulasiPage />
})