import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/akademik/jadwal-pengajar')({
  component: () => <div>Hello /akademik/jadwal-pengajar!</div>
})