import { createFileRoute } from '@tanstack/react-router'
import LoginPage from "@/pages/auth/login-page.tsx";

export const Route = createFileRoute('/(auth)/login')({
  component: () => <LoginPage />
})
