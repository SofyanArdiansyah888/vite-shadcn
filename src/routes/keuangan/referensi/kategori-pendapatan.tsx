import { createFileRoute } from '@tanstack/react-router'
import KategoriPendapatanPage from "@/pages/keuangan/referensi/kategori-pendapatan/kategori-pendapatan-page.tsx";

export const Route = createFileRoute('/keuangan/referensi/kategori-pendapatan')({
  component: () => <KategoriPendapatanPage />
})
