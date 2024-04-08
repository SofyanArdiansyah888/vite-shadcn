import { createFileRoute } from '@tanstack/react-router'
import StaffEditPage from "@/pages/staff/staff-edit-page.tsx";

export const Route = createFileRoute('/staff/$id')({
  component: () => <StaffEditPage />
})
