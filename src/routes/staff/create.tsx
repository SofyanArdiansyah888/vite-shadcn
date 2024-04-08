import { createFileRoute } from '@tanstack/react-router'
import StaffForm from "@/pages/staff/components/staff-form.tsx";

export const Route = createFileRoute('/staff/create')({
  component: () => <StaffForm />
})
