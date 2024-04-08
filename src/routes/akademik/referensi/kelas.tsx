import { createFileRoute } from '@tanstack/react-router'
import KelasPage from "@/pages/akademik/referensi/kelas/kelas-page.tsx";

export const Route = createFileRoute('/akademik/referensi/kelas')({
  component: () => <KelasPage />
})
