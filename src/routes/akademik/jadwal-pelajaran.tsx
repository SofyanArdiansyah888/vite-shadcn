import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/akademik/jadwal-pelajaran')({
  component: () => <div>Hello /akademik/jadwal-pelajaran!</div>
})