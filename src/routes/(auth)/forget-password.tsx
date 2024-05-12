import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/forget-password')({
  component: () => <div>Hello /auth/forget-password!</div>
})