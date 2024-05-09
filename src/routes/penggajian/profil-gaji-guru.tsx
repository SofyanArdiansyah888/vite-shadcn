import { createFileRoute } from '@tanstack/react-router'
import ProfilGajiGuruPage from "@/pages/penggajian/profil-gaji-guru/profil-gaji-guru-page.tsx";

export const Route = createFileRoute('/penggajian/profil-gaji-guru')({
  component: () => <ProfilGajiGuruPage />
})
