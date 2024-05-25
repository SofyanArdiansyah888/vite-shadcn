import { createFileRoute } from '@tanstack/react-router'
import ProfilPage from "@/pages/pengguna/profil/profil-page.tsx";

export const Route = createFileRoute('/pengguna/profil')({
  component: () => <ProfilPage />
})