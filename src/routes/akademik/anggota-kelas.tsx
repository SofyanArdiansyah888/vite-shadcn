import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/akademik/anggota-kelas')({
  component: () => <div>Hello /akademik/anggota-kelas!</div>
})