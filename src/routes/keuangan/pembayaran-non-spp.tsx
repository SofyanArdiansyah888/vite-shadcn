import { createFileRoute } from '@tanstack/react-router'
import PembayaranNonSppPage from "@/pages/keuangan/pembayaran-non-spp/pembayaran-non-spp-page.tsx";

export const Route = createFileRoute('/keuangan/pembayaran-non-spp')({
  component: () => <PembayaranNonSppPage />
})
