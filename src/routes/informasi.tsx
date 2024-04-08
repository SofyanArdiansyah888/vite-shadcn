import { createFileRoute } from '@tanstack/react-router'
import InformasiPage from "@/pages/modul/informasi/informasi-page.tsx";

export const Route = createFileRoute('/informasi')({
  component: () => <InformasiPage />
})
