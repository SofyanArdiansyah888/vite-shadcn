import { createFileRoute } from '@tanstack/react-router'
import CreateStaff from "@/pages/modul/staff/create-staff.tsx";

export const Route = createFileRoute('/staff/create')({
  component: () => <CreateStaff />
})
