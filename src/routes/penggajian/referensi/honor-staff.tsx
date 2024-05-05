import { createFileRoute } from '@tanstack/react-router'
import HonorStaffPage from "@/pages/penggajian/honor-staff/honor-staff-page.tsx";

export const Route = createFileRoute('/penggajian/referensi/honor-staff')({
  component: () => <HonorStaffPage />
})
