import { createFileRoute } from '@tanstack/react-router'
import DataSppPage from "@/pages/keuangan/spp/data-spp/data-spp-page.tsx";

export const Route = createFileRoute('/keuangan/spp/data-spp')({
  component: () => <DataSppPage />
})
