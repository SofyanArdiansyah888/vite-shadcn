import { createFileRoute } from '@tanstack/react-router'
import PengaturanPage from "@/pages/absensi/pengaturan/pengaturan-page.tsx";

export const Route = createFileRoute('/absensi/pengaturan')({
  component: () => <PengaturanPage />
})
