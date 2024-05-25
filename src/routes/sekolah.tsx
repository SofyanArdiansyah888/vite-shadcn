import { createFileRoute } from '@tanstack/react-router'
import SekolahPage from "@/pages/sekolah/sekolah-page.tsx";

export const Route = createFileRoute('/sekolah')({
  component: () => <SekolahPage />
})