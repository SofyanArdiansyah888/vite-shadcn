import { createFileRoute } from '@tanstack/react-router'
import PelanggaranSiswaPage from "@/pages/pelanggaran/pelanggaran-siswa/pelanggaran-siswa-page.tsx";

export const Route = createFileRoute('/pelanggaran/pelanggaran-siswa')({
  component: () => <PelanggaranSiswaPage />
})
