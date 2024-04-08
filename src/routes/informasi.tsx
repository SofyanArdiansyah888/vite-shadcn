import { createFileRoute } from '@tanstack/react-router'
import InformasiPage from "@/pages/informasi/informasi-page.tsx";

export const Route = createFileRoute('/informasi')({
  component: () => <InformasiPage />
})
