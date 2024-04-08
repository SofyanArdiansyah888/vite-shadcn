import { createFileRoute } from '@tanstack/react-router'
import AbsensiPertemuanDetail from "@/pages/akademik/absensi-pertemuan/absensi-pertemuan-detail.tsx";

export const Route = createFileRoute('/akademik/absensi-pertemuan/detail/$id')({
  component: () => <AbsensiPertemuanDetail />
})
