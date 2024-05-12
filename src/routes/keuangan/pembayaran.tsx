import { createFileRoute } from '@tanstack/react-router'
import KategoriPembayaranPage from "@/pages/keuangan/kategori-pembayaran/kategori-pembayaran-page.tsx";

export const Route = createFileRoute('/keuangan/pembayaran')({
  component: () => <KategoriPembayaranPage />
})
